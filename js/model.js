"use strict";
APP.Model = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    firstName: "",
    lastName: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    zipCode: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.firstName) errors.firstName = true;
    if (!attrs.lastName) errors.lastName = true;
    if (!attrs.addressOne) errors.addressOne = true;
    if (attrs.zipCode && !$.isNumeric(attrs.zipCode)) errors.zipCode = true;
    if (!_.isEmpty(errors)) return errors;
  }
});

APP.Collection = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("Collection"),
  model: APP.Model,
});
