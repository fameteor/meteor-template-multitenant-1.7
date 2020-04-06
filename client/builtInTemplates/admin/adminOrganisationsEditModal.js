// ==============================================
// TEMPLATE adminOrganisationsEditModal
// ==============================================
Template.adminOrganisationsEditModal.helpers({
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
				console.log("Erreur module\"organisationEditModal\" : action \"" + this.action + "\" non supportée (INSERT, UPDATE, DELETE seuls supportés)");
				break;
		}
	}
});

Template.adminOrganisationsEditModal.events = {
	"click .boutonSupprimer" :  function(e,tpl) {
		e.preventDefault();
		// We deleted the corresponding parcel
		Organisations.remove(
			Template.parentData(0).doc._id,
			function(error,nb) {
				if (error) 	toastr.warning(TAPi18n.__("adminOrganisationsEditModal.deleteError",error.reason));
				else {
					if (nb == 0) toastr.warning(TAPi18n.__("adminOrganisationsEditModal.deletedMsgNothing"));
					else {
						// On ferme la popup (si plusieurs modales)
						Modal.hide(Template.instance());
						toastr.success(TAPi18n.__("adminOrganisationsEditModal.deletedMsg",{"count":nb}));
					}
				}
			}
		);
	},
};