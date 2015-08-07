var Person = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  },
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/co-people'
});
