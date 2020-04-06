// Default users creation ------------------------------------
const initialUsersList = [

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// DO NOT MODIFY the EMAIL of the main administrator (admin@orange.com) : 
	// It is used to avoid to be modified (users creation and modification methods).
	// We need to keep it in ordre to have a "bootstrap" admin in case of users management errors
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	{email:"admin@orange.com", 	password:"adminadmin",	alias: "ADMIN", roles:["CAN_ADMIN_ORGANISATIONS","CAN_ADMIN_USERS"], 							language : "fr"},
	{email:"dev@orange.com", 	password:"devdev",	 	alias: "DEV",	roles:["CAN_ADMIN_ORGANISATIONS","CAN_ADMIN_USERS","CAN_USE_DEV_MENU"], 		language : "en"},
];

if (Meteor.users.find().count() === 0) {
	initialUsersList.forEach(function(user) {
		const userId = Accounts.createUser(
				{
					"email": 			user.email,
					"password" : 		user.password
				}
			)
			// We add the alias
			Meteor.users.update({_id: userId}, {$set: {
					'profile.alias':user.alias,
					'profile.language':user.language
			}});
			// We update the roles
			Roles.addUsersToRoles(userId, user.roles);
	});
	console.log("- Default users created")
}
else console.log("- Default users already exists.")

console.log("Mongo DB initialised")