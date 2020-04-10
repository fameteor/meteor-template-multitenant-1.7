// Default users creation ------------------------------------
const initialUsersList = [

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// DO NOT MODIFY the EMAIL of the main administrator (admin@orange.com) : 
	// It is used to avoid to be modified (users creation and modification methods).
	// We need to keep it in ordre to have a "bootstrap" admin in case of users management errors
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	{email:"admin@orange.com", 	password:"adminadmin",	alias: "ADMIN", roles:["CAN_ADMIN_TENANTS","CAN_ADMIN_USERS"], 					language : "fr"},
	{email:"dev@orange.com", 	password:"devdev",	 	alias: "DEV",	roles:["CAN_ADMIN_TENANTS","CAN_ADMIN_USERS","IS_DEVELOPER"], 	language : "en"},
	{email:"tenant1@orange.com", 	password:"tenant1tenant1",	 	alias: "tenant 1",	roles:[], 		language : "fr"},
	{email:"tenant2@orange.com", 	password:"tenant2tenant2",	 	alias: "tenant 2",	roles:[], 		language : "en"},
];

let usersIds = {};

if (Meteor.users.find().count() === 0) {
	initialUsersList.forEach(function(user) {
		const userId = Accounts.createUser(
			{
				"email": 			user.email,
				"password" : 		user.password
			}
		)
		// We memorise the id
		usersIds[user.email] = userId;
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

// Default tenant creation ------------------------------------
console.log(usersIds)
const initialTenantsList = [
	{label:"Air France", 	administrators:[usersIds["admin@orange.com"], usersIds["dev@orange.com"], usersIds["tenant1@orange.com"]]},
	{label:"KLM", 			administrators:[usersIds["admin@orange.com"], usersIds["dev@orange.com"], usersIds["tenant2@orange.com"]]},
];

if (Tenants.find().count() === 0) {
	initialTenantsList.forEach(function(tenant) {
		Tenants.insert(tenant);
	});
	console.log("- Default tenants created")
}
else console.log("- Default tenants already exists.")


// ------------------------------------------------------------
console.log("Mongo DB initialised")