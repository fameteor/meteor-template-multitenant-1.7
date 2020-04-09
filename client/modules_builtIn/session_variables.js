import { Session } from 'meteor/session'

Meteor.startup(function () {
	
	Session.setDefault("selectedTenantId", null);

	console.log("session variables initialised");

});