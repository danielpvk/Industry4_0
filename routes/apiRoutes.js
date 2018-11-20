var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/process", function(req, res) {
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
  app.delete("/api/process/:id", function(req, res) {
    db.Process.destroy({ where: { id: req.params.id } }).then(function(dbProcess) {
      res.json(dbProcess);
    });
  });
 // ****************** DEVICE TYPES **************************
 app.get("/api/device", function(req, res) {
  db.Device.findAll({}).then(function(dbDevice) {
    res.json(dbDevice);
  });
});

// Create a new device type
app.post("/api/device", function(req, res) {
  console.log("los datos del post en la api");
  console.log(req.body);
  db.Device.create(req.body).then(function(dbDevice) {
    res.json(dbDevice);
  });
});

// Delete an device by id
app.delete("/api/device/:id", function(req, res) {
  db.Device.destroy({ where: { id: req.params.id } }).then(function(dbDevice) {
    res.json(dbDevice);
  });
});



};
