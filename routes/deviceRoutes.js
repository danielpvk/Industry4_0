var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/device", function(req, res) {
    db.Device.findAll({}).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

  // Create a new example
  app.post("/device", function(req, res) {
    console.log("los datos del post en la api");
    console.log(req.body);
      db.Device.create(req.body).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

    // Load example page and pass in an device type id
  app.get("/device/:id", function(req, res) {
       db.Device.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
        res.render("device", {
          device: dbDevice
        });
      });   
  });
  


  // Delete an example by id
  app.delete("/api/device/:id", function(req, res) {
    db.DeviceType.destroy({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });
};
