var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/devicetype", function(req, res) {
    db.Device.findAll({}).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

  // Create a new example
  app.post("/devicetype", function(req, res) {
    console.log("los datos del post en la api");
    console.log(req.body);
    devicedb=require('../models/Process')(app);
    db.Device.create(req.body).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

    // Load example page and pass in an device type id
  app.get("/devicetype/:id", function(req, res) {
      devicedb=require('../models/Process')(app);
      devicedb.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
        res.render("device", {
          device: dbDevice
        });
      });
  });
  


  // Delete an example by id
  app.delete("/api/devicetype/:id", function(req, res) {
    db.Device.destroy({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });
};
