Template.lists.onCreated(function() {
  sub = Meteor.subscribe('lists', -1);
})

Template.lists.helpers({
  lists: function() {
    return Lists.find();
  },
  id: function() {
    return this.index;
  }
})

Template.lists.events({
  'click #clear': function(e, t) {
    sub.stop();
  },
  'click #larger': function(e, t) {
    sub = Meteor.subscribe('lists', true);
  },
  'click #small': function(e, t) {
    sub = Meteor.subscribe('lists', false);
  },
})
