var NewView = Backbone.View.extend({
  template: AppTemplates.newpost,

  events: {
    'submit form': 'save',
  },

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    console.info('render');

    return this;
  },

  save: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('.title').val();
    var post = this.$el.find('.post').val();
    var date = new Date();
    var createString = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();

    var model = this.collection.add({title: title, post: post, createDate: createString,});
    model.save().then(function() {
      window.location = '#' + model.id;
    });
  },

});
