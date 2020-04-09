// ROUTES DEFINITION -----------------------------------------
routes_PARMS = [
	{path: '/', 											mainTpl: 	'routerHome', 				permissions: null},
	{path: '/configuration/credentials', 					mainTpl: 	'credentialsManagement', 	permissions: ["CAN_MANAGE_CREDENTIALS"]},
	{path: '/admin/tenants', 								mainTpl: 	'tenantManagement', 		permissions: ["CAN_ADMIN_TENANTS"]},
	{path: '/admin/users', 									mainTpl: 	'adminUsers', 				permissions: ["CAN_ADMIN_USERS"]},
	{path: '/dev/doc', 										mainTpl: 	'devDoc', 					permissions: ["IS_DEVELOPER"]},
	{path: '/dev/doc/:componentName/:suffix', 				mainTpl: 	'devDoc', 					permissions: ["IS_DEVELOPER"]},
	{path: '/dev/schemasDoc', 								mainTpl: 	'devSchemasDoc', 			permissions: ["IS_DEVELOPER"]},
	{path: '/dev/schemasDoc/:schemaName', 					mainTpl: 	'devSchemasDoc', 			permissions: ["IS_DEVELOPER"]}
];