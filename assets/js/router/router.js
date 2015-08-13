var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
    this.collection.fetch();
    this.sidebar = new SidebarView({collection: this.collection});
    this.newPost = new NewView({collection: this.collection});
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
      _this.currentPost = new BlogView({model: model});
      $('#target').html(_this.currentPost.render().el);
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
      var edit = new EditView({model: model});
    };

    showEdit();
    this.listenTo(this.collection, 'sync', showEdit);
  },

  newBlog: function() {
    var nPost = new NewView();
    $('#target').html(this.newPost.render().el);
  },

});
