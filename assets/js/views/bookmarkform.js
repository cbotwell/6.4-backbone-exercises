var BookmarkForm = Backbone.View.extend ({
  template: AppTemplates.bookmarkform,

  el: '#target',

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync', this.render);
    this.render();
  },

  events: {
    'click .add-bookmark': 'addBookmark',
    'submit .submit-bookmark': 'submitBookmark'
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
    console.info('render');
    return this;
  },

  addBookmark: function() {
    this.$el.find('.new-bookmark').slideDown();
  },

  submitBookmark: function(ev) {
    ev.preventDefault();
    var link = this.$el.find('input.link').val();
    var tag = this.$el.find('input.tag').val();
    this.collection.create({createDate: new Date(), link: link, tag: tag});
  }
});
