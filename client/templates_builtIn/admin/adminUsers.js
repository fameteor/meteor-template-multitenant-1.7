Template.adminUsers.helpers({
	usersList() {
		return Meteor.users.find({},{sort: { "profile.alias": 1 }}).fetch();
	},
	email() {
		return this.emails && this.emails[0] && this.emails[0].address;
	},
	roleTranslation(role) {
		return TAPi18n.__("common_PARMS.permissions." + role);
	},
	deleteButtonTitle() {
		// If there is no object pointing on this user
		if (true) {
			if (Meteor.user()._id === this._id) {
				return TAPi18n.__("adminUsers.noSelfDeletionMsg");
			}
			else {
				if (	this.emails 
						&& this.emails[0] 
						&& this.emails[0].address 
						&& this.emails[0].address ==="admin@orange.com") {
					return TAPi18n.__("adminUsers.noAdminDeletionMsg");
				}
				else return TAPi18n.__("adminUsers.deleteButton");
			}
		}
		else return TAPi18n.__("adminUsers.deletionImpossibleMsg");
	},
	deleteButtonDisabled() {
		if (true) {
			if (Meteor.user()._id === this._id) {
				return "disabled";
			}
			else {
				if (	this.emails 
						&& this.emails[0] 
						&& this.emails[0].address 
						&& this.emails[0].address ==="admin@orange.com") {
					return "disabled";
				}
			}
		}
		else return "disabled";
	},
	thisUserTenantsList() {
		return Tenants.find({administrators:this._id}).fetch();
	}
});


Template.adminUsers.events({
	'click #addUser'(e,tpl){
		e.preventDefault();
		Modal.show("adminUsersEditModal",{action:"INSERT"},{backdrop:'static',keyboard:false});
	},
	'click .modifyUser'(e,tpl){
		e.preventDefault();
		// !!!!!! Workaround : we need to JSON stringify the doc to pass it. Why ????
		Modal.show("adminUsersEditModal",{action:"UPDATE","doc":JSON.stringify(this)},{backdrop:'static',keyboard:false});
	},
	'click .deleteUser'(e,tpl){
		e.preventDefault();
		Modal.show("adminUsersEditModal",{action:"DELETE","doc":this},{backdrop:'static',keyboard:false});
	}
});