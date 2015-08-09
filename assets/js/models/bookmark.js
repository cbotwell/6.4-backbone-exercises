var Bookmark = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    createDate: null,
    link: '',
    tag: ''
  }
});
