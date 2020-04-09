import { Session } from 'meteor/session'

Meteor.startup(function () {
	
	Session.setDefault("selectedOrganisationId", null);

	console.log("session variables initialised");

});