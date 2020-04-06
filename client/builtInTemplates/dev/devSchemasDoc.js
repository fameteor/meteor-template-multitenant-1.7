Template.devSchemasDoc.helpers({
	schemasList() {
		return Object.keys(schemas).sort();
	},
	selectedSchema() {
		return schemas[FlowRouter.getParam("schemaName")];
	},
	selectedSchemaName() {
		return FlowRouter.getParam("schemaName");
	},
	properties() {
		var result = [];
		var that = this;
		Object.keys(this._schema).map(function(property) {
			result.push({
				"label":property,
				"value":that._schema[property]
			});
		});
		return result;
	},
	type() {
		if (this.value.type && this.value.type.definitions && this.value.type.definitions[0]) {
			var defs = this.value.type.definitions[0];
			// If it is a function
			if (defs.type && (typeof(defs.type) === 'function')) {
				return "::" + this.value.type.definitions[0].type.name;
			}
			else {
				// If it is an object
				if (typeof(defs.type) == "object") {
					if (this.value.doc)	return '::SCHEMAS <a href="/dev/schemasDoc/' + this.value.doc + '"><code>' + this.value.doc + '</code></a>';
					else					return '::AUTRE SCHEMAS';
				}
				// Otherwise we return the string type
				else return defs.type;
			}
		}
	},
	allowedValues() {
		var result = "";
		if (this.value.type && this.value.type.definitions && this.value.type.definitions[0]) {
			var defs = this.value.type.definitions[0];
			if (defs.min || defs.max || defs.allowedValues || defs.regEx) {
				// If there is a min
				if (defs.min) result += "minimum value : " + defs.min + "<br/>";
				// If there is a max
				if (defs.max) result += "maximum value : " + defs.max + "<br/>";
				// If there is a list of values
				if (defs.allowedValues) {
					if (typeof defs.allowedValues === "function")	result += "<pre>::" + JSON.stringify(defs.allowedValues(),null,4) + "</pre>";
					else											result += "<pre>::" + JSON.stringify(defs.allowedValues,null,4) + "</pre>";
				}
				// If there is a regEx
				if (defs.regEx) result += "regex : <code>" + defs.regEx.toString() + "</code>";
			}
			else result = "-";
		}
		else result = "-";
		return result;
	},
	mandatory() {
		if (!this.value.optional)  	return "<span class='text-danger'>MANDATORY</span>";
		else						return "<span class='text-success'>OPTIONAL</span>";
	},
	autovalue() {
		return ("autoValue" in this.value);
	},
	link() {
		if (this.value && this.value.link) {
			return {
				collection:	this.value.link.collection && this.value.link.collection._name,
				linkType:	this.value.link.linkType
			}
		}
	}
});


