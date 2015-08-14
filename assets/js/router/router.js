var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
    this.collection.fetch();
    this.sidebar = new SidebarView({collection: this.collection});
    // this.newPost = new NewView({collection: this.collection});
    $('#sidebar').html(this.sidebar.render().el);
  },

  routes: {
    '(#)': 'index',
    new: 'newBlog',
    ':id': 'readPost',
    ':id/edit': 'edit',
  },

  index: function() {
    var _this = this;

    var attachDetail = function() {
      var model = _this.collection.first();
      _this.indexPost = new BlogView({model: model});
      $('#target').html(_this.indexPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

  readPost: function(id) {
    var _this = this;

    var attachDetail = function() {
      var model = _this.collection.get(id);
      _this.currentPost = new BlogView({model: model});
      $('#target').html(_this.currentPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

  edit: function(id) {
    var _this = this;

    var showEdit = function() {
      var model = _this.collection.get(id);
      this.editView = new EditView({model: model});
      $('#target').html(this.editView.render().el);
    };

    showEdit();
    this.listenTo(this.collection, 'sync', showEdit);
  },

  newBlog: function() {
    this.newPostView = new NewView();
    $('#target').html(this.newPostView.render().el);
  },

});
