var posts = new BlogPosts();
var currentPost;
var allPosts;
var router;
var edit;
var newview;

posts.fetch().then(function() {
  currentPost = new BlogView({collection: posts});
  allPosts = new SidebarView({collection: posts});
  router = new AppRouter(currentPost);
  edit = new EditView({collection: posts});
  newview = new NewView({collection: posts})
});

Backbone.history.start();
