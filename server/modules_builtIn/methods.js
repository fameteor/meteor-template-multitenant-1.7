Meteor.startup(() => {
	// Methods ----------------------------------------------------------
	Meteor.methods({
		'addUser'(form) {
			// if the user is allowed to manage users
			if (Roles.userIsInRole(Meteor.userId(), 'CAN_ADMIN_USERS')) {
				// We create the user
				var userId = Accounts.createUser({email: form.email, password: form.password});
				// We update the users alias
				if (Meteor.users.update(
					{_id: userId},
					{
						$set: {
							'profile.alias': form.alias,
						}
					}
				) === 1) {
					// We set the roles to the user
					if (form.roles && form.roles.length != 0) Roles.setUserRoles(userId, form.roles);
					return "ok";
				} else throw new Meteor.Error("server.error.mongoInsertionFailure", "server.error.mongoInsertionFailure");
			} else throw new Meteor.Error("server.error.notAllowedToCreateUser", "server.error.notAllowedToCreateUser");
		},
		'modifyUser'(form) {
			// if the user is allowed to manage users
			if (Roles.userIsInRole(Meteor.userId(), 'CAN_ADMIN_USERS')) {

				// ????????????????????????????
				// ADMIN mail roles and alias should not be modified
				// ????????????????????????????

				var userInEditionId = form._id;
				var modifier = form && form.modifier && form.modifier.$set;
				// If the password is changed, we modify it
				if (modifier.password != "******") Accounts.setPassword(userInEditionId, modifier.password);
				// We change the alias and profile and email
				Meteor.users.update({_id: userInEditionId}, {
					$set: {
						'emails.0.address': modifier && modifier.email,
						'profile.alias': modifier && modifier.alias
					}
				});
				// We set the roles to the user
				if (modifier.roles && modifier.roles.length != 0) 	Roles.setUserRoles(userInEditionId, modifier.roles);
				else 												Roles.setUserRoles(userInEditionId, []);

				var usedRoles = modifier && modifier.roles;
				if (usedRoles) {
					Roles.setUserRoles(userInEditionId, usedRoles);
				}
				return "ok";
			} else throw new Meteor.Error("server.error.notAllowedToModifyUser", "server.error.notAllowedToModifyUser");
		},
		'removeUser'(id) {
			// if the user is allowed to manage users
			if (Roles.userIsInRole(Meteor.userId(), 'CAN_ADMIN_USERS')) {
				var user = Meteor.users.findOne(id);
				if (user) {
					if (Meteor.userId() === user._id) throw new Meteor.Error("server.error.selfDeletionNotAllowed", "server.error.selfDeletionNotAllowed");
					else {
						if (user.emails
							&& user.emails[0]
							&& user.emails[0].address
							&& user.emails[0].address != "admin@orange.com") {
							// Check for pointing objects
							if (true) {
								return Meteor.users.remove({_id: id});
							}
							else {
								throw new Meteor.Error("server.error.linksExistForThisUser", "server.error.linksExistForThisUser");
							}
						} else throw new Meteor.Error("server.error.adminCannotBeDeleted", "server.error.adminCannotBeDeleted");
					}
				} else throw new Meteor.Error("server.error.userDoesNotExist", "server.error.userDoesNotExist");
			} else throw new Meteor.Error("server.error.notAllowedToDeleteUser", "server.error.notAllowedToDeleteUser");
		},
	});
	
	console.log("Methods initialised")
});