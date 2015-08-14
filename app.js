var AppTemplates = {};

AppTemplates['blog'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<article>\n    <header>\n        <h1 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    </header>\n    <section>\n        <p class=\"date\">posted on: "
    + alias3(((helper = (helper = helpers.createDate || (depth0 != null ? depth0.createDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"createDate","hash":{},"data":data}) : helper)))
    + "</p>\n        <p class=\"post\">"
    + alias3(((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"post","hash":{},"data":data}) : helper)))
    + "</p>\n    </section>\n    <a href=\"#"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "/edit\"><button class=\"editbutton\">Edit Post</button></a>\n</article>\n";
},"useData":true});
AppTemplates['edit'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form class=\"edit\">\n    <input type=\"text\" name=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"title\">\n    <textarea name=\"post\" class=\"post\">"
    + alias3(((helper = (helper = helpers.post || (depth0 != null ? depth0.post : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"post","hash":{},"data":data}) : helper)))
    + "</textarea>\n    <button class=\"save\">Save</button>\n    <button class=\"delete\">Delete</button>\n</form>\n";
},"useData":true});
AppTemplates['newpost'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"new\">\n    <input type=\"text\" name=\"title\" class=\"title\" placeholder=\"Title\">\n    <textarea name=\"body\" class=\"post\" placeholder=\"body\"></textarea>\n    <button class=\"save\">Submit</button>\n</form>\n";
},"useData":true});
AppTemplates['sidebar'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li>\n            <a href=\"#"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1._id : stack1), depth0))
    + "\">\n                <p class=\"title\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
    + "</p>\n                <p class=\"post\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.post : stack1), depth0))
    + "</p>\n                <p class=\"date\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.createDate : stack1), depth0))
    + "</p>\n            </a>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    <li class=\"newbutton\">\n        <a href=\"#new\">\n            <button>New</button>\n        </a>\n    </li>\n</ul>\n";
},"useData":true,"useBlockParams":true});
var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    post: '',
    createDate: null,
    editDate: null,
  },
});

var BlogPosts = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/co-blog'
});

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

var EditView = Backbone.View.extend({
  template: AppTemplates.edit,

  events: {
    'click .save': 'save',
    'click .delete': 'delete',
  },

  initialize: function() {
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

  save: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('.title').val();
    var post = this.$el.find('.post').val();
    var date = new Date();
    var dateString = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();
    this.model.save({title: title, post: post, editDate: dateString}).then(function() {
      router.navigate('this.model.id', {trigger: true});
    });
  },

  delete: function(ev) {
    ev.preventDefault();
    this.model.destroy().then(function() {
      router.navigate('', {trigger: true});
    });
  },
});

var NewView = Backbone.View.extend({
  template: AppTemplates.newpost,

  events: {
    'submit form': 'save',
  },

  initialize: function() {
    this.listenTo(this.collection, 'add reset sync', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    console.info('render');

    return this;
  },

  save: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('.title').val();
    var post = this.$el.find('.post').val();
    var date = new Date();
    var createString = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear();

    var model = this.collection.add({title: title, post: post, createDate: createString,});
    model.save().then(function() {
      window.location = '#' + model.id;
    });
  },

});

var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogPosts();
    this.collection.fetch();
    this.sidebar = new SidebarView({collection: this.collection});
    $('#sidebar').html(this.sidebar.render().el);
  },

  routes: {
    '(#)': 'index',
    new: 'newBlog',
    ':id': 'readPost',
    ':id/edit': 'edit',
  },

  index: function() {
    var _this = this;

    var attachDetail = function() {
      var model = _this.collection.first();
      _this.indexPost = new BlogView({model: model});
      $('#target').html(_this.indexPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

  readPost: function(id) {
    var _this = this;
    if (this.indexPost) {
      this.indexPost.remove();
    }

    if (this.currentPost) {
      this.currentPost.remove();
    }

    if (this.editView) {
      this.editView.remove();
    }

    if (this.newPostView) {
      this.newPostView.remove();
    }

    var attachDetail = function() {
      var model = _this.collection.get(id);
      _this.currentPost = new BlogView({model: model});
      $('#target').html(_this.currentPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

  edit: function(id) {
    var _this = this;
    if (this.indexPost) {
      this.indexPost.remove();
    }

    if (this.currentPost) {
      this.currentPost.remove();
    }

    if (this.newPostView) {
      this.newPostView.remove();
    }

    var showEdit = function() {
      var model = _this.collection.get(id);
      this.editView = new EditView({model: model});
      $('#target').html(this.editView.render().el);
    };

    showEdit();
    this.listenTo(this.collection, 'sync', showEdit);
  },

  newBlog: function() {
    if (this.indexPost) {
      this.indexPost.remove();
    }

    if (this.editView) {
      this.editView.remove();
    }

    if (this.newPostView) {
      this.newPostView.remove();
    }

    if (this.currentPost) {
      this.currentPost.remove();
    }

    this.newPostView = new NewView({collection: this.collection});
    $('#target').html(this.newPostView.render().el);
  },

});

var router = new AppRouter();

Backbone.history.start();
//# sourceMappingURL=app.map