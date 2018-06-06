
var path = require("path");

module.exports = function(app) {

  // A default, catch-all route that leads to index.html which displays the home page.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/css/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  // A GET Route to /survey which should display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
