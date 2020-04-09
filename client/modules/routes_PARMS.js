// ROUTES DEFINITION -----------------------------------------
routes_PARMS = [
	{path: '/', 											mainTpl: 	'routerHome', 				permissions: null},
	{path: '/configuration/credentials', 					mainTpl: 	'credentialsManagement', 	permissions: ["CAN_MANAGE_CREDENTIALS"]},
	{path: '/admin/organisations', 							mainTpl: 	'adminOrganisations', 		permissions: ["CAN_ADMIN_ORGANISATIONS"]},
	{path: '/admin/users', 									mainTpl: 	'adminUsers', 				permissions: ["CAN_ADMIN_USERS"]},
	{path: '/dev/component_doc', 							mainTpl: 	'component_doc', 			permissions: ["IS_DEVELOPER"]},
	{path: '/dev/component_doc/:componentName/:suffix', 	mainTpl: 	'component_doc', 			permissions: ["IS_DEVELOPER"]},
	{path: '/dev/schemasDoc', 								mainTpl: 	'devSchemasDoc', 			permissions: ["IS_DEVELOPER"]},
	{path: '/dev/schemasDoc/:schemaName', 					mainTpl: 	'devSchemasDoc', 			permissions: ["IS_DEVELOPER"]}
];