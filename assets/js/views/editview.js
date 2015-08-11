var EditView = Backbone.View.extend({
  el: '#target',

  template: AppTemplates.edit,

  events: {
    'click .save': 'save',
    'click .delete': 'delete',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var data = {};
    if (this.model) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    return this;
  },

  save: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('.title').val();
    var post = this.$el.find('.post').val();
    var date = new Date();
    var dateString = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();
    this.model.save({title: title, post: post, editDate: dateString});
    // router.navigate('');
  },

  delete: function(ev) {
    ev.preventDefault();
    this.model.destroy();
    // router.navigate('');
  },
});
