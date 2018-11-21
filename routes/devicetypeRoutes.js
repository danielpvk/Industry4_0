var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/devicetype", function(req, res) {
    db.DeviceType.findAll({}).then(function(dbDeviceType) {
      res.json(dbDeviceType);
    });
  });

  // Create a new example
  app.post("/devicetype", function(req, res) {
    console.log("los datos del post en la api");
    console.log(req.body);
      db.DeviceType.create(req.body).then(function(dbDeviceType) {
      res.json(dbDeviceType);
    });
  });

    // Load example page and pass in an device type id
  app.get("/devicetype/:id", function(req, res) {
       db.DeviceType.findOne({ where: { id: req.params.id } }).then(function(dbDeviceType) {
        res.render("devicetype", {
          device: dbDeviceType
        });
      });   
  });
  app.get("/devicetype-raw/:id", function(req, res) {
    db.DeviceType.findOne({ where: { id: req.params.id } }).then(function(dbDeviceType) {
      res.json(dbDeviceType);
   });   
  });  


  // Delete an example by id
  app.delete("/api/devicetype/:id", function(req, res) {
    db.DeviceType.destroy({ where: { id: req.params.id } }).then(function(dbDeviceType) {
      res.json(dbDeviceType);
    });
  });
};
