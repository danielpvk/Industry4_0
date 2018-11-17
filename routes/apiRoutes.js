var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/process", function(req, res) {
    console.log("making get, the data returned is:");
    db.Process.findAll({}).then(function(dbProcess) {
      res.json(dbProcess);
    });
  });

  // Create a new example
  app.post("/api/process", function(req, res) {
    console.log("los datos del post en la api");
    console.log(req.body);
    db.Process.create(req.body).then(function(dbProcess) {
      res.json(dbProcess);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
