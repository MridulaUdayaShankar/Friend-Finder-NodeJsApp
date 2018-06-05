var friends = require("../data/friends.js");

module.exports = function (app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends.scores);
  });
  // A POST routes /api/friends
  app.post("/api/friends", function (req, res) {
    console.log('request body', req.body);
    // code to handle incoming survey results
    var result = req.body;
    var name = "";
    var photo = "";
    Array.prototype.diff = function (a) {
      return this.filter(function (i) {
        return a.indexOf(i) < 0;
      });
    };
    function add(a, b) {
      return Math.abs(a + b);
    }
    console.log("Survey Result is: ", result);
    //code to handle the compatibility logic
    var userScore = result.score;
    var friendsScore = friends.scores;
    for (var i = 0; i < userScore.length; i++) {
      userScore[i] = Number(userScore[i]);
    }
    console.log('userScore', userScore);
    // function compareScores(friends, userScore) {
    // for (var i = 0; i < friends.length; i++) {
    //   for (var j = 0; j < userScore.length; j++) {
    //     console.log("**********", userScore, friends[i].scores);
    //     // score = friends[i].scores.diff(userScore);

    //     console.log('$$', score);
    //     // score = score.reduce(add, 0);

    //     // Math.abs(friends[i].scores - userScore);
    //     console.log(score);
    //   }
    // }
    var topFriend, lowScore = 50;

    friends.forEach(function (friend) {
      var scoreArr = friend.scores.map(function (item, index) {
        return Math.abs(item - userScore[index]);
      });
      //sum of all elements in the array
      var score = scoreArr.reduce((x, y) => x + y);
      if (score < lowScore) {
        topFriend = friend;
        lowScore = score;
      }
      console.log("$$", score, "^^^^^^^^^", scoreArr);
    });
    console.log('top friend', topFriend, lowScore);

    res.json({ name: topFriend.name, photo: topFriend.photo });

    // friends.forEach(function(friend) {
    //   userScore.forEach(function(user) {
    //     console.log('**********', friend, friend.score);
    //     score += Math.abs(friend.score - userScore);
    //     console.log('#######', score);
    //   })
    // })
  });
};
