var TagView = Backbone.View.extend({
  template: AppTemplates.taglist,

  el: '#tags',

  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  render: function() {
    var _this = this;

    this.collection.fetch().then(function() {
      var filteredTags = _this.collection.reduce(function(snowball, model) {
        if (!_.findWhere(snowball, {name: model.get('tag')})) {
          snowball.push({name: model.get('tag'), path: model.get('tag')});
        }

        return snowball;
      }, [{name: 'all', path: ''}]);

      var html = _this.template(filteredTags);

      _this.$el.html(html);
    });

    return this;
  },
});
