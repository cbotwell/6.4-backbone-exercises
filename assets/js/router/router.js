var AppRouter = Backbone.Router.extend ({
  initialize: function() {
    this.template = AppTemplates.blog;
    this.collection = new BlogPosts();
  },

  routes: {
    ':id(/)': 'post'
  },

  post: function(id) {
    var _this = this;
    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.get(id).toJSON());
      $('#target').html(html);
    });
  }

});
