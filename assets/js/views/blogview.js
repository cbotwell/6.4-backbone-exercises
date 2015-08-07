var BlogView = Backbone.View.extend ({
  el: '#target',

  template: AppTemplates.blog,

  initialize: function() {
    var html = this.template((this.collection.first).toJSON());
    this.$el.html(html);

    return this;
  }
});
