import { Mongo } from 'meteor/mongo';

// Collections -----------------------------------------
Organisations = new Mongo.Collection('organisations');

// Schemas attachment ----------------------------------
Organisations.attachSchema(schemas.organisation);