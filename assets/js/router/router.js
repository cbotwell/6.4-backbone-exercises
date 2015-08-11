var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
  },

  routes: {
    ':id(/)': 'post',
    ':id/edit': 'edit',
  },

  post: function(id) {
    this.template = AppTemplates.blog;
    var _this = this;

    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.get(id).toJSON());
      $('#target').html(html);
    });
  },

  edit: function(id) {
    this.template = AppTemplates.edit;
    var _this = this;

    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.get(id).toJSON());
      $('#target').html(html);
    });
  },

});
