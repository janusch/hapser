Haps.UsersController = Ember.ArrayController.extend({
  init: function () {
    console.log(this.get('model').find(1));
    this._super();
    },

});
