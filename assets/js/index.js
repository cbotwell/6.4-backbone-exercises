var posts = new BlogPosts();
var currentPost;
var allPosts;

posts.fetch().then(function() {
  currentPost = new BlogView({collection: posts});
  allPosts = new SidebarView({collection: posts});
});

var router = new AppRouter(currentPost);

Backbone.history.start();
