// Function to build an array of {value,label} with localized labels for a common_PARMS property
// Ex : common_PARMS_optionsList("permissions")

common_PARMS_optionsList = function(paramName) {
	if (paramName in common_PARMS) {
		return common_PARMS[paramName].map(function(value) {
			return {
				"value": value,
				"label": TAPi18n.__("common_PARMS." + paramName + "." + value)
			};
		});	
	}
	else console.log("common_PARMS_optionsList function error : " + paramName + " do not exists in /imports/startup/both/common_PARMS.js");
}