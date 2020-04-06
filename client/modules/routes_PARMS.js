// ROUTES DEFINITION -----------------------------------------
routes_PARMS = [
	{path: '/', 											mainTpl: 	'routerHome', 			permissions: null},
	{path: '/admin/organisations', 							mainTpl: 	'adminOrganisations', 	permissions: ["CAN_ADMIN_ORGANISATIONS"]},
	{path: '/admin/users', 									mainTpl: 	'adminUsers', 			permissions: ["CAN_ADMIN_USERS"]},
	{path: '/dev/component_doc', 							mainTpl: 	'component_doc', 		permissions: ["CAN_USE_DEV_MENU"]},
	{path: '/dev/component_doc/:componentName/:suffix', 	mainTpl: 	'component_doc', 		permissions: ["CAN_USE_DEV_MENU"]},
	{path: '/dev/schemasDoc', 								mainTpl: 	'devSchemasDoc', 		permissions: ["CAN_USE_DEV_MENU"]},
	{path: '/dev/schemasDoc/:schemaName', 					mainTpl: 	'devSchemasDoc', 		permissions: ["CAN_USE_DEV_MENU"]}
];