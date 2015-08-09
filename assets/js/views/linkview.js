var LinkView = Backbone.View.extend ({
  template: AppTemplates.linkview,

  el: '#links',

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync', this.render);
    this.render();
  },

  render: function() {
    var _this = this;
    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.toJSON());
      _this.$el.html(html);
    });

    return this;
  }
});
