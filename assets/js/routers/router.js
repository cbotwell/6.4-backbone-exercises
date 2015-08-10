var Router = Backbone.Router.extend({
  routes: {
    '(:tag)': 'filterLinksByTag',
  },

  initialize: function() {
    this.template = AppTemplates.linkview;
    this.collection = new AllBookmarks();
  },

  filterLinksByTag: function(tag) {
    var _this = this;

    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.filter(function(model) {
        if (tag) {
          return model.get('tag') === tag;
        }

        return true;
      }).map(function(model) {
        return model.toJSON();
      }));

      $('#links').html(html);
    });
  },
});
