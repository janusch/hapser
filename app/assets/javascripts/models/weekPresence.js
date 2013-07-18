Haps.WeekPresence = DS.Model.extend({
  monday: DS.attr('boolean'), //{ defaultValue: true }),
  tuesday: DS.attr('boolean'),
  wednesday: DS.attr('boolean'),
  thursday: DS.attr('boolean'),
  friday: DS.attr('boolean'),
  week: DS.belongsTo('Haps.Week'),
  user: DS.belongsTo('Haps.User'),
//test save func
  saveWhenDirty: (function() {
      if (this.get('isDirty')) {
        return this.get('store').commit();
      }
    }).observes('isDirty')
});
