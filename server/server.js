Meteor.startup(function() {
  var mid = 5;
  if (Lists.find().fetch().length == 0) {
    for (var i = 0; i < 10; i++) {
      Lists.insert({'index': i});
    }
  }

  Meteor.publish('lists', function(n) {
    console.log('publish');
    if (n === -1) {
      var cursor = Lists.find({ index: { $eq: mid } });
    } else if (n) {
      var cursor = Lists.find({ index: { $gt: mid } });
    } else {
      var cursor = Lists.find({ index: { $lt: mid } });
    }
    console.log(cursor.fetch());
    return cursor;
  })
});
