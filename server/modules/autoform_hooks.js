Meteor.startup(() => {
	// Méthodes autorisées au client
    Organisations.allow({
        insert: function (userId, doc) {
            // Only if role CAN_ADMIN_ORGANISATIONS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_ORGANISATIONS')) {
                throw new Meteor.Error("server.error.organisationsManagement.notAllowed", "server.error.organisationsManagement.notAllowed");
            } else return true;
        },
        update: function (userId, doc, fields, modifier) {
            // Only if role CAN_ADMIN_ORGANISATIONS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_ORGANISATIONS')) {
                throw new Meteor.Error("server.error.organisationsManagement.notAllowed", "server.error.organisationsManagement.notAllowed");
            } else return true;
        },
        remove: function (userId, doc) {
            // Only if role CAN_ADMIN_ORGANISATIONS
            if (!Roles.userIsInRole(userId, 'CAN_ADMIN_ORGANISATIONS')) {
                throw new Meteor.Error("server.error.organisationsManagement.notAllowed", "server.error.organisationsManagement.notAllowed");
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