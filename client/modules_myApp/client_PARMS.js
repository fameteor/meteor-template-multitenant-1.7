client_PARMS = {
	// Default languages -------------------------------
	defaultLanguage : "fr",
	// Supported languages -----------------------------
	languages : [
		"fr",
		"en"
	],
	// Used icons --------------------------------------
	icons : {
		"warning" : 		"fas fa-exclamation-triangle",
		"admin":			"fas fa-cogs",
		"dev" :				"far fa-file-code",
		"connected" :		"fas fa-server",
		"disconnected" :	"fa fa-spinner fa-pulse",
		"waiting" :			"fa fa-spinner fa-pulse",
		"previous":			"fas fa-arrow-alt-circle-left",
		"next":				"fas fa-arrow-alt-circle-right",
		"modify":			"glyphicon glyphicon-pencil",
		"delete":			"glyphicon glyphicon-remove",
		"connectedUser":	"fas fa-user",
		"nonConnectedUser":	"fas fa-user-slash",
		"schemaAutovalue":	"fa fa-cog fa-spin"
	},
	"tenantSelect_allowedPathContains" : [
		"/configuration",
		"/dev/component_doc/tenantSelect/_builtInTemplateDOC" // to be displayed on template documentation !
	],
	"devDoc_chapters" : [
		// ---------------------------------------------
		// Attention : no suffix should be included in another one !
		// ---------------------------------------------
		{chapter:"my-app templates",	suffix:"_myAppTemplateDOC"},
		{chapter:"built-in templates",	suffix:"_builtInTemplateDOC"},
		{chapter:"components",			suffix:"_DOC"}
	]
};