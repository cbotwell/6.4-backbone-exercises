var BlogPosts = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/co-blog'
});
