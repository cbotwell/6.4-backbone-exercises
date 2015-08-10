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

      //going to try to use this filter later, but moving on to get router working

      var filteredTags = _this.collection.filter(_this.collection.models, function(model) {
        if (model.attributes.tag) {
          return {tag: model.attributes.tag};
        }
      }

      );
      var html = _this.template(_this.collection.toJSON());

      _this.$el.html(html);
    });

    return this;
  }
});
