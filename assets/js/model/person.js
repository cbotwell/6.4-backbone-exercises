var Person = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  }
});

var People = Backbone.Collection.extend ({
  model: Person,
  url: 'http://tiny-lr.herokuapp.com/collections/co-people'
});
