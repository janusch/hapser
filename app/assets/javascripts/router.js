Haps.Router.map(function() {
  this.resource("index", { path: "/" });
  this.resource("overview", function(){
    this.resource("items");
  });
  this.resource("weeks", function() {
    this.resource("week", { path: ':week_id' });
  });
});

Haps.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('overview');
  }
});

Haps.OverviewRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor('items').set('model', Haps.Item.find());
  }
});

Haps.ItemsRoute = Ember.Route.extend({
  model: function(){
    return Haps.Item.find();
  }
});

Haps.WeeksRoute = Ember.Route.extend({
  model: function(){
    return Haps.Week.find();
  }
});

Haps.WeekRoute = Ember.Route.extend({
  setupController: function(container,model) {
    console.log('this', model);
    this.controllerFor('week').set('selectedWeek', model);
  },
  // model: function(params) {
  //     return Haps.WeekPresence.find(params.weekPresences_id);
  //   }
});


