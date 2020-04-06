import { Session } from 'meteor/session'

// ---------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------
Template.routerLanguageSelect.helpers({
	languageList() {
		return client_PARMS.languages;
	},
	i18nLanguageEntry(language) {
		return "client_PARMS.languages." + language;
	},
	selectedLanguage() {
		return Session.get("language");
	},
	activeLanguage() {
		return (Session.get("language") === this.toString()) ? 'active' : '';
	}
});

// ---------------------------------------------------------------
// EVENTS
// ---------------------------------------------------------------
Template.routerLanguageSelect.events({
	'click .languageSelector'(evt, tpl) {
		// Change the session parameter 'language'
		Session.set("language",this.toString());
		// And if user is logged in, change the user language
		if (Meteor.userId()) Meteor.users.update(
			{_id: Meteor.userId()},
			{$set: {"profile.language": this.toString()}}
		);
	}
});