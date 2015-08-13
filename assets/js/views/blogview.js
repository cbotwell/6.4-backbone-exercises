var BlogView = Backbone.View.extend({

  template: AppTemplates.blog,

  initialize: function() {
    this.listenTo(this.collection, 'add sync change', this.render);
    this.render();
  },

  render: function() {
    var data = {};
    if (this.model) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    console.info('render');

    return this;
  },
});
