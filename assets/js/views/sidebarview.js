var SidebarView = Backbone.View.extend({

  template: AppTemplates.sidebar,

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync change', this.render);
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    // this.collection.sortBy('createDate');

    console.info('render');

    return this;
  },
});
