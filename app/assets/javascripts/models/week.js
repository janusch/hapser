Haps.Week = DS.Model.extend({
  beginDate: DS.attr('date'),
  status: DS.attr('string'),
  // headCount: function () {
  //   var headCount = this.get('users.length');
  //   return headCount;
  // }.property('users'),
  number: function () {
    var weekNumber = moment(Haps.Week.beginDate).isoWeek();
    return weekNumber;
  }.property('beginDate'),
  chef: DS.belongsTo('Haps.User'),
  weekPresences: DS.hasMany('Haps.WeekPresence')
});

