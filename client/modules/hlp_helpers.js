import { Session } from 'meteor/session'

Meteor.startup(function () {

	// -----------------------------------------
	// Global helpers
	UI.registerHelper('hlp_eq', function(a,b) {
		return (a === b);
	});
	
	UI.registerHelper('hlp_sessionVar', function(name) {
		return Session.get(name);
	});
	
	let hlp_count = function(element) {
		if (Array.isArray(element)) return element.length;
		else if (element instanceof Mongo.Collection.Cursor) return element.count();
	};
	
	UI.registerHelper('hlp_count', hlp_count);
	
	console.log("hlp_helpers initialised");
	
});