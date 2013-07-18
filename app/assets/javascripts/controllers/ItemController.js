Haps.ItemController = Ember.ObjectController.extend({
  removeItem: function () {
    var item = this.get('model');
    item.deleteRecord();
    item.save();
  },

  updateRecord: function () {
    var item = this.get('model');
    item.updateRecord();
    item.commit();
  },

  isCompleted: function(key, value){
    var model = this.get('model');
    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else if (value === true) {
      // property being used as  setter
      model.set('isCompleted', value);
      var timeNow = moment().format('LL');
      model.set('completedAt', new Date());
      model.save();
      return value;
    } else if (value === false) {
      model.set('completedAt', null);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
