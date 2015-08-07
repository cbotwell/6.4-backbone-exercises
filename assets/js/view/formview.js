var FormView = Backbone.View.extend ({

  el: '#target',

  template: AppTemplates.app,

  events: {
    'submit form': 'createPerson'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();

    this.$el.html(html);

    console.info('render');
  },

  createPerson: function(ev) {
    ev.preventDefault();

    var firstName = this.$('.first-name').val();
    var lastName = this.$('.last-name').val();
    var address = this.$('.address').val();
    var phone = this.$('.phone').val();

    this.model.save({firstName: firstName, lastName: lastName, address: address, phone: phone});

    this.$('.first-name').val('');
    this.$('.last-name').val('');
    this.$('.address').val('');
    this.$('.phone').val('');

    this.model = new Person();
  }

});
