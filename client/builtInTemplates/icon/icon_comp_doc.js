Template.icon_comp_doc.helpers({
	iconList() {
		return Object.keys(client_PARMS && client_PARMS.icons);
	},
	iconListJS() {
		return JSON.stringify(client_PARMS && client_PARMS.icons, null, 4);
	}
});