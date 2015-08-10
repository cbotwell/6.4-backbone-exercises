var bookmarks = new AllBookmarks();
var form = new BookmarkForm({collection: bookmarks});
// var links = new LinkView({collection: bookmarks});
var tags = new TagView({collection: bookmarks});
var router = new Router({collection: bookmarks});
Backbone.history.start();
