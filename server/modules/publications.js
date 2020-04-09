Meteor.startup(() => {
	// Publications -----------------------------------------------------
	Meteor.publish('users.meOrAllForAdmin', function () {
		// If CAN_ADMIN_USERS, all users are published
		if (Roles.userIsInRole(this.userId, 'CAN_ADMIN_USERS')) return Meteor.users.find(
			{},
			{
				fields : {
					emails: 1,
					profile: 1,
					createdAt: 1,
					roles: 1,
					status: 1			
				}
			}
		);
		// Otherwise, only the connected user is published
		else return Meteor.users.find(
			{_id: this.userId},
			{fields: {"profile":1}}
		);
	});
	
	 Meteor.publish("tenants.myTenants", function () {
        // Only if user CAN_ADMIN_TENANTS
        if (Roles.userIsInRole(this.userId, 'CAN_ADMIN_TENANTS')) return Tenants.find({});
        // Else : only tenants where the connected user is administrator
        else return Tenants.find({administrators: Meteor.userId()});
    });

	// ------------------------------------------------------------------
	console.log("Publications initialised")
});