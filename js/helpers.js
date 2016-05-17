(function () {
  APP.helpers = {

    debug: function (collection) {
      collection.on('all', function () {
        $('#output').text(JSON.stringify(collection.toJSON(), null, 4));
      });
      collection.trigger('reset');
    },

    showErrors: function (note, errors) {
      $('.has-error').removeClass('has-error');
      _.each(_.keys(errors), function (key) {
        $('*[id=' + key + ']').parent().addClass('has-error');
      });
    }
  };
}());
