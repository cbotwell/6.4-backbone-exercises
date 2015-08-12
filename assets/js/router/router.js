var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
    this.collection.fetch();
    allPosts = new SidebarView({collection: this.collection});
    newview = new NewView({collection: this.collection});
  },

  routes: {
    '(#)': 'index',
    ':id': 'readPost',
    ':id/edit': 'edit',
  },

  index: function() {
    var _this = this;

    this.collection.fetch().then(function() {
      var currentPost = new BlogView({model: _this.collection.first()});
    });
  },

  readPost: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var currentPost = new BlogView({model: _this.collection.get(id)});
    });
  },

  edit: function(id) {
    var _this = this;

    var showEdit = function() {
      var model = _this.collection.get(id);
      var edit = new EditView({model: model});
    };

    showEdit();
    this.listenTo(this.collection, 'sync', showEdit);
  },

});
