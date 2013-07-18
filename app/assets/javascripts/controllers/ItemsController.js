Haps.ItemsController = Ember.ArrayController.extend({
  init: function () {
    this.set('newItemCount', '1');
    this._super();
  },

  sortProperties: ["createdAt"],
  sortAscending: false,

  addItem: function () {
    var title = this.get('newItem');
    var newItemCount = this.get('newItemCount');

    //validate input
    var isCountValid = Number(newItemCount);
    if (isCountValid <= 0) {
      $("input").blur();
      this.set('newItemCount', '1');
      return alert('Please specify a positive amount!');
    }

    if (!title.trim()) {
      $("input").blur();
      return alert('This is not a valid name, please try again!');
    }

    // Create Item model
    var item = Haps.Item.createRecord({
      title: title,
      count: newItemCount
    });

    // Clear count and text field
    this.set('newItem', '');
    this.set('newItemCount', '1');

    $('#count').focus();
    // Save the new model
    item.save();
  }
});
