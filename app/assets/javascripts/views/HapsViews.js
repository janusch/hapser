UserView = Ember.View.create({
  templateName: 'user'
  });

Haps.ChefView = Ember.View.extend({
  templateName: 'chef',
  currentChef: 'Cecilie'
});

Haps.NumberField = Ember.TextField.extend({
  tagName: "input",
  type: 'number',
  attributeBindings: ['min', 'max']
});

Haps.ItemsView = Ember.View.extend({
  templateName: 'items'
});

Haps.SelectRouteView = Ember.Select.extend({
  contentBinding: "controller.weeks",
  optionValuePath: "content.id",
  optionLabelPath: "content.number",
  prompt: "Pick a week:",
  valueBinding: "Haps.WeeksController.selectedWeek",
  selectionBinding: "Haps.WeeksController.selectedWeek"

  //handle change of selected and trigger router:
  // goToSelected: function (selectedWeek) {
  //   this.get("controller").send("goToSelected(selectedWeek)");
  //   console.log('selectedWeek')
  // }.observes('Haps.WeeksController.selectedWeek')
});
