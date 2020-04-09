Template.presence_builtInTemplateDOC.helpers({
	usersList : function() {
		return Meteor.users.find().fetch();
	}
});