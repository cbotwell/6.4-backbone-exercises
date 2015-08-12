var NewView = Backbone.View.extend({
  el: '#newpost',

  template: AppTemplates.newpost,

  events: {
    'click .save': 'save',
    'click .newbutton': 'newPost',
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

    this.collection.create({title: title, post: post, createDate: createString,});
  },

  newPost: function() {
    this.$el.find('.new').slideDown();
  },
});
