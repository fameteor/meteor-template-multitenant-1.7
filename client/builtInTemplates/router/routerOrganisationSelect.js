import { Session } from 'meteor/session'

Template.routerOrganisationSelect.helpers({
	organisationsList() {
		return Organisations.find().fetch();
	},
	allowedPath() {
		let result = false;
		FlowRouter.watchPathChange();
		client_PARMS.routerOrganisationSelect_allowedPathContains.map(function(value) {
			if (FlowRouter.current().path.indexOf(value) != -1) result = true;
		});
		return result;
	}
});

Template.routerOrganisationSelect.events = {
	// Boutons de navigation
	"change .organisationSelect" : function(e,tpl) {
		e.preventDefault();
		Session.set("selectedOrganisationId", e.target.value);
	}
};


