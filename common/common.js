import { Mongo } from 'meteor/mongo';

// Collections -----------------------------------------
Tenants = new Mongo.Collection('tenants');

// Schemas attachment ----------------------------------
Tenants.attachSchema(schemas.tenant);