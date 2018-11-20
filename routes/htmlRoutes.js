var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Process.findAll({}).then(function(dbProcess) {
      res.render("index", {
        msg: "Welcome!",
        process: dbProcess
      });
    });
  });
  // load add new process
  app.get("/addprocess/", function(req, res) {
    db.Process.findAll({}).then(function(dbProcess) {
      res.render("addprocess", {
        msg: "Welcome!",
        process: dbProcess
      });
    });
  });

  // Load example page and pass in an example by id
   app.get("/process/:id", function(req, res) {
    db.Process.findOne({ where: { id: req.params.id } }).then(function(dbProcess) {
      res.render("process", {
        process: dbProcess
      });
    });
  });
/*
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  }); */
  app.get("/process", function(req, res) {
    db.Process.findAll({}).then(function(dbProcess) {
      res.json(dbProcess);
    });
  });


};
