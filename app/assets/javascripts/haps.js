#= require_self
#= require ./localstorage_adapter
#= require ./store
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates
#= require_tree ./routes
#= require ./router

Haps = Ember.Application.create({
  // FIXME: remove logging for production

  LOG_STACKTRACE_ON_DEPRECATION : true,
  LOG_BINDINGS                  : true,
  LOG_TRANSITIONS               : true,
  LOG_TRANSITIONS_INTERNAL      : false,
  LOG_VIEW_LOOKUPS              : true,
  LOG_ACTIVE_GENERATION         : true 

});

Ember.Handlebars.registerBoundHelper('fromNow', function(date) {
  if (date !== null){
    return moment(date).fromNow();
  } else {
    date = '';
    return date;
  }
});

Haps.currentWeekNumber = moment().week();

