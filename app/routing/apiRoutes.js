var friends = require("/data/friends.js");


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends",function(req,res){
res.json(friends);
});
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends",function(req,res){
var surveyResult = req.params.surveyResult;
console.log("Survey Result is: ", req.params.surveyResult);
// if (surveyResult === //somebody's survey result)
{
// display your match found! 
// display modal
}
});