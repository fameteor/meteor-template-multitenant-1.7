import { Session } from 'meteor/session'

onGlobalCollectionsLoaded = function() {
	// Selected Organisation ---------------------------------------
	const organisationsList = Organisations.find().fetch();

	if (organisationsList.length > 0) {
		Session.set("selectedOrganisationId", organisationsList[0]._id);
	}
	else {
		Session.set("selectedOrganisationId", null);
	}
	
	console.log("onGlobalCollectionsLoaded initialised");
}