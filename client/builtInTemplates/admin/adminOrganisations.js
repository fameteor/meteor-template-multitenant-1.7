Template.adminOrganisations.helpers({
	organisationsList() {
		return Organisations.find({},{sort: { label: 1 }}).fetch();
	},
	deleteDisabled() {
		/*
		// If the object is used by at least one item in another collection;
		var pointingObjects = gf_getPointingObjects(this,"ORGANISATION");
		if (!gf_thereIsNoPointingObject(pointingObjects)) return "disabled";
		*/
	},
	deleteTitle() {
		/*
		var pointingObjects = gf_getPointingObjects(this,"ORGANISATION");
		if (gf_thereIsNoPointingObject(pointingObjects)) return "supprimer cette organisation";
		else return TAPi18n.__("organisationManagement.deleteTitle",gf_pointingObjectDescription(pointingObjects));
		*/
	}
});

Template.adminOrganisations.events({
	'click #add'(e,tpl){
		e.preventDefault();
		Modal.show("adminOrganisationsEditModal",{action:"INSERT"},{backdrop:'static',keyboard:false});
	},
	'click .modify'(e,tpl){
		e.preventDefault();
		Modal.show("adminOrganisationsEditModal",{action:"UPDATE","doc":this},{backdrop:'static',keyboard:false});
	},
	'click .delete'(e,tpl){
		e.preventDefault();
		Modal.show("adminOrganisationsEditModal",{action:"DELETE","doc":this},{backdrop:'static',keyboard:false});
	}
});