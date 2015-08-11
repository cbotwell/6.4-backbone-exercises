var BlogView = Backbone.View.extend({
  el: '#target',

  template: AppTemplates.blog,

  initialize: function() {
    var _this = this;
    var html = _this.template(_this.collection.first().toJSON());
    _this.$el.html(html);

    return this;
  },
});
