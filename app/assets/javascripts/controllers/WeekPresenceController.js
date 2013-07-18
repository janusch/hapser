Haps.WeekPresenceController = Ember.ObjectController.extend({

  save: function (key, value) {
    var model = this.get('model');
  console.log(this.get('content.selectedWeek'));
    console.log(this);
    var currentUserId = Haps.User.find(Haps.current_user.id);
    var currentWeekId = this.get('content.selectedWeek.id');
    var weekPresence = Haps.WeekPresence.createRecord({
      monday: this.get('model.monday'),
      tuesday: this.get('model.tuesday'),
      wednesday: this.get('model.wednesday'),
      thursday: this.get('model.thursday'),
      friday: this.get('model.friday'),
      //user: currentUserId,
      //week: this.get('Week.id') //currentWeekId //this.set('Haps.Week', this.get('content.selectedWeek.id'))
    });
//model.set('user', currentUserId);
    //model.get('user').pushObject(currentUserId);
    weekPresence.get('transaction').commit();
  }
});
