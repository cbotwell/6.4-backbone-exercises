var Router = Backbone.Router.extend({
  routes: {
    ':tag(/)': 'filterLinksByTag',
  },

  initalize: function() {
    this.template = AppTemplates.linkview;
    this.collection = new AllBookmarks();
  },

  filterLinksByTag: function(tag) {
    var _this = this;
    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.get(tag).toJSON());
      $('#links').html(html);
    });
  },
});
