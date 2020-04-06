// AUTOFORM hooks ---------------------------------------
	
	
Meteor.startup(function () {
	
	AutoForm.hooks({
		// For the organisations
		"insertOrganisationForm" : {
			// Called when any submit operation succeeds
			onSuccess: function(formType, result) {
				// On ferme la popup
				$('.modal').modal('hide');
				// On affiche la popup success
				toastr.success(TAPi18n.__("adminOrganisationsEditModal.insertOrganisationForm.success"));
			},
			// Called when any submit operation fails
			onError: function(formType, error) {
				// On affiche la popup erreur
				if (error.reason != undefined) {
					toastr.warning(TAPi18n.__("adminOrganisationsEditModal.insertOrganisationForm.error",error.reason));
				}
			}
		},
		"updateOrganisationForm" : {
			// Called when any submit operation succeeds
			onSuccess: function(formType, result) {
				// On ferme la popup
				$('.modal').modal('hide');
				// On affiche la popup success
				toastr.success(TAPi18n.__("adminOrganisationsEditModal.updateOrganisationForm.success"));
			},
			// Called when any submit operation fails
			onError: function(formType, error) {
				// On affiche la popup erreur
				if (error.reason != undefined) {
					toastr.warning(TAPi18n.__("adminOrganisationsEditModal.updateOrganisationForm.error",error.reason));
				}
			}
		},
		
		
		// For the users
		// ==============================================
		"insertUserForm" : {
			// Called when any submit operation succeeds
			onSuccess: function(formType, result) {
				// We close the popup
				$('.modal').modal('hide');
				// We display the success popup
				toastr.success(TAPi18n.__("adminUsersEditModal.insertSuccessMsg"));
			},
			// Called when any submit operation fails
			onError: function(formType, error) {
				// We display the error popup
				// If server error, a reason must exist
				if (error.reason) toastr.warning(TAPi18n.__("adminUsersEditModal.insertErrorMsg") + TAPi18n.__(error.reason));
				else toastr.warning(TAPi18n.__("adminUsersEditModal.insertErrorMsg") + error);
			}
		},
		"modifyUserForm" : {
			// Called when any submit operation succeeds
			onSuccess: function(formType, result) {
				// We close the popup
				$('.modal').modal('hide');
				// We display the success popup
				toastr.success(TAPi18n.__("adminUsersEditModal.modifySuccessMsg"));
			},
			// Called when any submit operation fails
			onError: function(formType, error) {
				// We display the error popup
				// If server error, a reason must exist
				if (error.reason)  toastr.warning(TAPi18n.__("adminUsersEditModal.modifyErrorMsg") + TAPi18n.__(error.reason));
				else toastr.warning(TAPi18n.__("adminUsersEditModal.modifyErrorMsg") + error);
			}
		},
	});
	
	console.log("Autoform hooks initialised");
	
});