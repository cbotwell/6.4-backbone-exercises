var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    post: '',
    createDate: null
  }
});
