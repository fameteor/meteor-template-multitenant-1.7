Template.component_doc.helpers({
	componentsList(suffix) {
		// We list the names of the components having doc
		var componentsList = [];
		// We list all templates ending by suffix, for instance "_doc"
		Object.keys(Template).map(function(key) {
			if (key.endsWith(suffix)) componentsList.push(key.slice(0, key.length - suffix.length))
		});
		// We order in alphabetical order
		componentsList.sort();
		return componentsList;
	},
	selectedDocTemplateName() {
		return FlowRouter.getParam("componentName") + FlowRouter.getParam("suffix");
	},
	selectedTemplateName() {
		return FlowRouter.getParam("componentName");
	},
	selectedSuffixName() {
		return FlowRouter.getParam("suffix");
	},
	chaptersList() {
		return component_doc_PARMS;
	}
});


