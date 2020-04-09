import { Session } from 'meteor/session'

Meteor.startup(function () {
	// To avoid logout
	let initialisationState = true; 
	// Set the language
	Session.setDefault("language", client_PARMS.defaultLanguage);
	// Set and reset the language anytime it is changed
	Tracker.autorun(function() {
		var currentLanguage = Session.get("language");
		TAPi18n.setLanguage(currentLanguage);
		// Change the language for the login UI
		accountsUIBootstrap3.setLanguage(currentLanguage);
		
		// ???????????????????????????????????????
		// To be optimized
		// ???????????????????????????????????????
		
		// We change the languages for all schemas
		Object.keys(schemas).forEach(function(value) {
			schemas[value].messageBox.language = currentLanguage;
		});
	});
	// Run on login / logout
	Tracker.autorun(function() {
		// On login
		if (Meteor.user()) {
			// Set the language
			if (	Meteor.user().profile
					&& Meteor.user().profile.language) {
				Session.set("language", Meteor.user().profile.language);
			}
			// Reroute to initial requested route if set
			if (Session.get("rerouteAfterLogin")) {
				FlowRouter.go(Session.get("rerouteAfterLogin"));
				Session.set("rerouteAfterLogin", null);
				console.log("Reroute executed");
			}
		}
		// On logout
		else {
			// We force the welcome screen (also log-in screen)
			if (!initialisationState) {
				console.log("Logout and route to /")
				FlowRouter.go('/');
			}
		}
	});
	initialisationState = false; 
	
	console.log("I18n initialised");

});