var NewView = Backbone.View.extend({
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

    // add a router navigate to the new post
  },

  newPost: function() {
    this.$el.find('.new').slideDown();

    // dosen't work with .then() and looks buggy try something different later
    // this.$('input.title').focus();
  },
});
