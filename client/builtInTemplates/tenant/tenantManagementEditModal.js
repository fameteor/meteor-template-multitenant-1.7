// ==============================================
// TEMPLATE tenantManagementEditModal
// ==============================================
Template.tenantManagementEditModal.helpers({
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

Template.tenantManagementEditModal.events = {
	"click .boutonSupprimer" :  function(e,tpl) {
		e.preventDefault();
		// We deleted the corresponding parcel
		Tenants.remove(
			Template.parentData(0).doc._id,
			function(error,nb) {
				if (error) 	toastr.warning(TAPi18n.__("tenantManagementEditModal.deleteError",error.reason));
				else {
					if (nb == 0) toastr.warning(TAPi18n.__("tenantManagementEditModal.deletedMsgNothing"));
					else {
						// On ferme la popup (si plusieurs modales)
						Modal.hide(Template.instance());
						toastr.success(TAPi18n.__("tenantManagementEditModal.deletedMsg",{"count":nb}));
					}
				}
			}
		);
	},
};