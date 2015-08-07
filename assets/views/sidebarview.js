var SidebarView = Backbone.View.extend({
  el: '#sidebar',

  template: AppTemplates.sidebar,

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync', this.render);
    this.collection.fetch();
    this.render();
  },

  render: function() {
    var html = this.template(this.collection);
    var _this = this;

    this.$el.html(html);

    this.collection.sortBy('createDate');

    console.info('render');

    return this;
  }
});
