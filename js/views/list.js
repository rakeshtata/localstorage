"use strict";
APP.listView = Backbone.View.extend({

	template: _.template($('#indexTemplate').html()),

  // populate the html to the dom
  render: function () {
    this.$el.html(
    	this.template({addresses: this.collection.toJSON()})
    );
    return this;
  }
});
