gf_getUserById = function(id) {
		return Meteor.users.findOne({_id:id});
	}
UI.registerHelper('gh_getUserById', gf_getUserById);

console.log("global helpers initialised");