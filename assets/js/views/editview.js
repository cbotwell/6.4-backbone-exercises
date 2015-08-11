var EditView = Backbone.View.extend({
  el: '#target',

  template: AppTemplates.edit,

  events: {
    'click .save': 'save',
    'click .delete': 'delete',
  },

  render: function(id) {
    var html = this.template(this.collection.get(id).toJSON());
    this.$el.html(html);

    return this;
  },

  save: function(ev, id) {
    ev.preventDefault();
    var title = this.$el.find('.title');
    var post = this.$el.find('.title');
    var date = new Date();
    var dateString = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();
    this.collection.set({title: title, post: post, editDate: dateString,}, {remove: false});
    router.navigate(id);
  },

  delete: function(ev, id) {
    ev.preventDefault();
    this.collection.remove(id);
    router.navigate('#');
  },
});
