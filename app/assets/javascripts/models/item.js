Haps.Item = DS.Model.extend({
  title: DS.attr('string'),
  count: DS.attr('number'),
  createdAt: DS.attr('date'),
  createdBy: DS.attr('string'), //rel til user
  deletedAt: DS.attr('date'),
  deletedBy: DS.attr('string'), //rel til user
  completedAt: DS.attr('date'),
  completedBy: DS.attr('number'), //rel til user see if needs to be two way rel
  isCompleted: function () {
    var completedAt = this.get('completedAt');
    if (completedAt) {
        return true;
      } else {
        return false;
      }
    }.property('completedAt')
});
