Template.presence_DOC.helpers({
	usersList : function() {
		return Meteor.users.find().fetch();
	}
});