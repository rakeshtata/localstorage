"use strict";

window.APP = window.APP || {};
APP.NoteRouter = Backbone.Router.extend({
  routes: {
    "list": "list",
    "index": "create",
  },

  $container: $('#primary-content'),

  initialize: function () {
    this.collection = new APP.Collection();
    this.collection.fetch({ajaxSync: false});
    APP.helpers.debug(this.collection);
    this.create();
    // start backbone watching url changes
    Backbone.history.start();
  },

  create: function () {
    var view = new APP.indexView({
      collection: this.collection,
      model: new APP.Model()
    });
    this.$container.html(view.render().el);
  },

  list: function () {
    var view = new APP.listView({collection: this.collection});
    this.$container.html(view.render().el);
  }
});
