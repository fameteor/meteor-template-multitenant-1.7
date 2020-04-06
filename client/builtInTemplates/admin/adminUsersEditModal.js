Template.adminUsersEditModal.helpers({
	modalPopupHeaderClass() {
		switch (this.action) {
			case "INSERT":
				return "modal-insert";
				break;
			case "UPDATE":
				return "modal-update";
				break;
			case "DELETE":
				return "modal-delete";
				break;
			default:
				console.log("Erreur module\"adminUsersEditModal\" : action \"" + this.action + "\" non supportée (INSERT, UPDATE, DELETE seuls supportés)");
				break;
		}
	},
	userForm() {
		return schemas.userForm;
	},
	docParsed() {
		// Workaround, see userProvisionning.events when modify users
		var user = JSON.parse(this.doc);
		// We create the existing data for the form
		var doc = {
			_id:		user._id,
			alias:		user && user.profile && user.profile.alias,
			email:		user && user.emails && user.emails[0] && user.emails[0].address,
			password:	"******",
			profile:	user && user.profile && user.profile.userProfile,
			roles:		user && user.roles
		};
		return doc;
	}
});

Template.adminUsersEditModal.events = {
	"click .boutonSupprimer" :  function(e,tpl) {
		e.preventDefault();
		Meteor.call(
			'removeUser',
			Template.parentData(0).doc._id,
			function (err, response) {
				if (err) 	{
					Modal.hide(Template.instance());
					toastr.warning(TAPi18n.__("adminUsersEditModal.deleteErrorMsg") + TAPi18n.__(err.reason));
				}
				else 		{
					Modal.hide(Template.instance());
					toastr.success(TAPi18n.__("adminUsersEditModal.deleteSuccessMsg"));
				}
			}
		);
	},
};