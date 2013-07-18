Haps.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  provider: DS.attr('string'),
  uid: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  //FIXME: add to rails model
  availableForPlanning: DS.attr('boolean'),
  vacantUntil: DS.attr('date'),
  createdAt: DS.attr('date'),
  weekPresences: DS.hasMany('Haps.WeekPresence')
});
