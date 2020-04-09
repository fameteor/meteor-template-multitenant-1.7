import { Session } from 'meteor/session'

onGlobalCollectionsLoaded = function() {
	// Selected Organisation ---------------------------------------
	const tenantsList = Tenants.find().fetch();

	if (tenantsList.length > 0) {
		Session.set("selectedTenantId", tenantsList[0]._id);
	}
	else {
		Session.set("selectedTenantId", null);
	}
	
	console.log("onGlobalCollectionsLoaded initialised");
}