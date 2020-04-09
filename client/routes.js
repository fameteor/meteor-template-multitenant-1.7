import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Session variables -----------------------------------------
Session.setDefault("waitingStatus", true);
Session.setDefault("waitingMsg", "routerLayout.dataLoadingMsg");
Session.setDefault("rerouteAfterLogin", null);


// FlowRouter defered initialisation when Roles publication OK
// -----------------------------------------------------------
FlowRouter.wait();

Tracker.autorun(function() {
	// Wair for roles to initialize
	if (Roles.subscription.ready() && !FlowRouter._initialized) {
		console.log("FlowRouter initialising");
		FlowRouter.initialize();
	}
});

// GLOBAL SUBSCRIPTIONS --------------------------------------
// Global subscriptions
FlowRouter.subscriptions = function(params, queryparams) {
	this.register('users.meOrAllForAdmin', Meteor.subscribe('users.meOrAllForAdmin'));
	this.register('tenants.myTenants', Meteor.subscribe('tenants.myTenants'));
}

// To run once only
let onGlobalSubscriptionLoadedRun = false;
Tracker.autorun(function() {
	if (FlowRouter.subsReady()) {
		if (!onGlobalSubscriptionLoadedRun) {
			onGlobalSubscriptionLoadedRun = true;
			onGlobalCollectionsLoaded();
		Session.set('waitingStatus', false);
		}
	}
});

// ROUTES CHECK FOR PERMISSIONS ------------------------------

var permissionsControl = function() {
	const currentRouteParms = routes_PARMS.find(function(route) {
		return route.path === FlowRouter.current().route.pathDef;
	});
	// If logged in, check for permissions
	if (Meteor.userId()) {
		if (currentRouteParms) {
			if (currentRouteParms.permissions) {
				if (!Roles.userIsInRole(Meteor.userId(),currentRouteParms.permissions)) {
					console.error("Unauthorised access to " + FlowRouter.current().route.pathDef);
					FlowRouter.go('/');
				}
				else return true;
			}
			else return true;
		}
		else {
			console.error("No route parm fits for " + FlowRouter.current().route.pathDef);
			FlowRouter.go('/');
		}
	}
	// If not logged in and if no reroute set, route to / with reroute on logging to requested URL
	else {
		if (!Session.get("rerouteAfterLogin") && FlowRouter.current().path != "/") {
			Session.set("rerouteAfterLogin",FlowRouter.current().path);
			console.log("Reroute after login set to : " + Session.get("rerouteAfterLogin"));
			FlowRouter.go('/');
		}
	}
}

// ROUTES LOGGING --------------------------------------------

var routesLogging = function() {
	// If you want to log the routes used by your users
	// console.log("Log route : " + FlowRouter.current().path);		
}

// Checks and logs for all routes ----------------------------
FlowRouter.triggers.enter([permissionsControl,routesLogging]);


// ROUTES SETUP ----------------------------------------------
// Set up all routes in the app
routes_PARMS.forEach(function(route) {
	FlowRouter.route(
		route.path, 
		{
			// name: 'example',
			action() {
				BlazeLayout.render('routerLayout', { main: route.mainTpl });
			}
		}
	);
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('routerLayout', { main: 'routerNotFound' });
  },
};
