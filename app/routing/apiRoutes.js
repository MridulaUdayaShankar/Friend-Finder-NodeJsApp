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
    var score;
    console.log("Survey Result is: ", result);
    //code to handle the compatibility logic
    var userScore = result.score;
    var friendsScore = friends.scores;
    console.log(friends);

    // function compareScores(friends, userScore) {
      for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < userScore.length; j++){
        console.log('**********', userScore, friends[i].scores);
        score += Math.abs(friends[i].scores - userScore);
        console.log(score);
      }}


      // friends.forEach(function(friend) {
      //   userScore.forEach(function(user) {
      //     console.log('**********', friend, friend.score);
      //     score += Math.abs(friend.score - userScore);
      //     console.log('#######', score);
      //   })
      // }) 


    //   return score;
    // }
    function modalDisplay(score){
    
    }
      res.json({ name: friends[0].name, photo: friends[0].photo });
   
  });
};
