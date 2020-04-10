Meteor.startup(() => {
	// Méthodes autorisées au client
    Tenants.allow({
        insert: function (userId, doc) {
            // Only if role CAN_ADMIN_TENANTS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_TENANTS')) {
                throw new Meteor.Error("server.error.tenantManagement.notAllowed", "server.error.tenantManagement.notAllowed");
            } else return true;
        },
        update: function (userId, doc, fields, modifier) {
            // Only if role CAN_ADMIN_TENANTS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_TENANTS')) {
                throw new Meteor.Error("server.error.tenantManagement.notAllowed", "server.error.tenantManagement.notAllowed");
            } else return true;
        },
        remove: function (userId, doc) {
            // Only if role CAN_ADMIN_TENANTS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_TENANTS')) {
                throw new Meteor.Error("server.error.tenantManagement.notAllowed", "server.error.tenantManagement.notAllowed");
            } else {
                // If links exists on the object, do not remove
				/*
                pointingObjects = gf_getPointingObjects(gf_organisationById(doc._id), "ORGANISATION")
                if (!gf_thereIsNoPointingObject(pointingObjects)) {
                    throw new Meteor.Error(403, "des " + gf_pointingObjectDescription(pointingObjects) + " y sont lié(e)(s)");
                } else return true;
				*/
				return true;
            }
        }
    });
	
	console.log("Autoform hooks initialised");
});