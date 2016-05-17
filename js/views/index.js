"use strict";

APP.indexView = Backbone.View.extend({
  events: {
    "click button.save": "save",
    "click button.next": "next",
  //  "keyup input": "validate",
  },

  template: _.template($('#formTemplate').html()),

  initialize: function (options) {
    this.model.bind('invalid', APP.helpers.showErrors, APP.helpers);
  },

  save: function (event) {
    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.model.set({
      firstName: this.$el.find('input[id=firstName]').val(),
      lastName: this.$el.find('input[id=lastName]').val(),
      addressOne: this.$el.find('input[id=addressOne]').val(),
      addressTwo: this.$el.find('input[id=addressTwo]').val(),
      city: this.$el.find('input[id=city]').val(),
      state: this.$el.find('input[id=state]').val(),
      zipCode: this.$el.find('input[id=zipCode]').val(),
    });

    if (this.model.isValid()) {
      // save it
      this.collection.add(this.model);
      this.model.save();
      Backbone.history.navigate("list", {trigger: true});
    }
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  },

  next: function(){
    if(this.$el.find('input[id=firstName]').val() && this.$el.find('input[id=lastName]').val())
      this.$el.find("#addressBlock").show();
  }
});
