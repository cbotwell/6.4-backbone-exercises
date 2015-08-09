var AllBookmarks = Backbone.Collection.extend({
  model: Bookmark,
  url: 'http://tiny-lr.herokuapp.com/collections/co-bookmarks'
});
