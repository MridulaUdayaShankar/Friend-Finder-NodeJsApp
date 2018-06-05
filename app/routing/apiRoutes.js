var friends = require("../data/friends.js");

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends.scores);
  });
  // A POST routes /api/friends
  app.post("/api/friends", function(req, res) {
    // code to handle incoming survey results
    var result = req.body;
    var name = "";
    var photo = "";
    Array.prototype.diff = function(a) {
      return this.filter(function(i) {
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
    userScore = userScore.map(Number);
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
    friends.forEach(function(friend) {
      var scoreArr = friend.scores.map(function(item, index) {
        return Math.abs(item - userScore[index]);
      });
      //sum of all elements in the array
      var score = scoreArr.reduce((x, y) => x + y);
      console.log("$$", score, "^^^^^^^^^", scoreArr);
    });
    if (score < 10) {
      res.json({ name: friends[index].name, photo: friends[index].photo });
    }
    // friends.forEach(function(friend) {
    //   userScore.forEach(function(user) {
    //     console.log('**********', friend, friend.score);
    //     score += Math.abs(friend.score - userScore);
    //     console.log('#######', score);
    //   })
    // })
  });
};
