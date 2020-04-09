import fontawesome from '@fortawesome/fontawesome-free/js/all.js';

Template.icon.helpers({
	iconName(name) {
		if (client_PARMS && client_PARMS.icons) return client_PARMS.icons[name];
	},
});


