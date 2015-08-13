var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
    this.collection.fetch();
    this.sidebar = new SidebarView({collection: this.collection});
    this.new = new NewView({collection: this.collection});
    $('#sidebar').html(this.sidebar.render().el);
    $('#newpost').html(this.new.render().el);
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
      _this.$('#target').html(currentPost.render().el);
    });
  },

  readPost: function(id) {
    var _this = this;

    this.collection.fetch().then(function() {
      var currentPost = new BlogView({model: _this.collection.get(id)});
      _this.$('#target').html(currentPost.render().el);
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
