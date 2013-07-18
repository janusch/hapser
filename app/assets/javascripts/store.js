//REST adapter
Haps.Store = DS.Store.extend({
  adapter: 'DS.RESTAdapter'
});

DS.RESTAdapter.map('Haps.Week', {
  weekPresences: {embedded: 'always'}
});

DS.RESTAdapter.map('Haps.WeekPresence', {
  user: {embedded: 'always'},
  week: {embedded: 'always'}
});

// DS.RESTAdapter.map('Haps.User', {
//   weekPresences: {embedded: 'always'}
// });

//fixture adapter
// Haps.Store.resgisterAdapter('Haps.User',DS.FixtureAdapter.extend({
//   adapter: 'DS.FixtureAdapter'
// }));
// Haps.Store.resgisterAdapter('Haps.Item',DS.FixtureAdapter.extend({
//   adapter: 'DS.RESTAdapter'
// }));


//FIXME: Localstorage Adapter
// Haps.store = DS.Store.create({
//   revision: 11,
//   adapter: DS.LSAdapter.create()
// });
// DS.LSAdapter.create({
//   namespace: 'Haps'
// });
