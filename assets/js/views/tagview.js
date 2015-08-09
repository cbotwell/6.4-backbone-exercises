var TagView = Backbone.View.extend ({
  template: AppTemplates.taglist,

  el: '#tags',

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  render: function() {
    var _this = this;

    this.collection.fetch().then(function() {
      var html = _this.template(_.filter(_this.collection.models, function(model) {
        if (!model.attributes.tag) {
          return {tag: model.attributes.tag};
        }
      }

      ));
      _this.$el.html(html);
    });

    return this;
  }
});
