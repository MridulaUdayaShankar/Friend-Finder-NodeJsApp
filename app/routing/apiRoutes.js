var friends = require("../data/friends.js");

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // A POST routes /api/friends
  app.post("/api/friends", function(req, res) {
   // code to handle incoming survey results
    var result = req.params.result;
    console.log("Survey Result is: ", req.params.result);
    //code to handle the compatibility logic
    var yourSurveyResult = [];
    for(var i=0; i < result.length; i++){
      yourSurveyResult.push(result[i]);
    }
    compatibilityCheck = yourSurveyResult - friendsArray;
    compatibilityCheck = Math.abs(compatibilityCheck);
    if (compatibilityCheck < 5)
    {
      // display- your match found!
      // display- modal
    }

  });
};
