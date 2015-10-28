Meteor.startup(function() {
  if (Lists.find().fetch().length == 0) {
    for (var i = 0; i < 10; i++) {
      Lists.insert({'index': i});
    }
  }

  Meteor.publish('lists', function(n) {
    console.log('publish');
    if (n === -1) {
      return [];
    }
    if (n) {
      var cursor = Lists.find({ index: { $gt: 5 } });
    } else {
      var cursor = Lists.find({ index: { $lt: 5 } });
    }
    console.log(cursor.fetch());
    return cursor;
  })
});
