var Router = Backbone.Router.extend({
  routes: {
    ':tag(/)': 'filterLinksByTag',
  },

  initialize: function() {
    this.template = AppTemplates.linkview;
    this.collection = new AllBookmarks();
  },

  filterLinksByTag: function(tag) {
    var _this = this;
    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.filter('models', function() {
        if (this.tag === tag) {
          return this.toJSON();
        }
      }));

      $('#links').html(html);
    });
  },
});
