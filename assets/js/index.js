var posts = new BlogPosts();

posts.fetch().then(function() {
  var currentPost = new BlogView({collection: posts});
  var allPosts = new SidebarView({collection: posts});
});
