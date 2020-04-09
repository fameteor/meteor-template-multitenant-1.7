import { Session } from 'meteor/session'

Template.tenantSelect.helpers({
	tenantsList() {
		return Tenants.find().fetch();
	},
	allowedPath() {
		let result = false;
		FlowRouter.watchPathChange();
		client_PARMS.tenantSelect_allowedPathContains.map(function(value) {
			if (FlowRouter.current().path.indexOf(value) != -1) result = true;
		});
		return result;
	}
});

Template.tenantSelect.events = {
	// Boutons de navigation
	"change .tenantSelect" : function(e,tpl) {
		e.preventDefault();
		Session.set("selectedTenantId", e.target.value);
	}
};


