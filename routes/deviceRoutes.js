var db = require("../models");

module.exports = function(app) {
  // Get all devices
  app.get("/device", function(req, res) {
    db.Device.findAll({}).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

  // Create a new device
  app.post("/device", function(req, res) {
    console.log("los datos del post en la api");
    console.log(req.body);
      db.Device.create(req.body).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });

    // Load device page and pass in an device type id
  app.get("/device/:id", function(req, res) {
       db.Device.findOne({ where: { id: req.params.id } }).then(function(dbDevice) {
        res.render("device", {
          device: dbDevice
        });
      });   
  });
  
   app.get("/device/numserie/:numserie", function(req, res) {
    db.Device.findAll({ where: { NumSerie: req.params.numserie } }).then(function(dbDevice) {
        res.json(dbDevice);
    });   
    }); 

/*   
    app.get("/device/numserie-last/:numserie", function(req, res) {
        db.Device.findAll({ where: { NumSerie: req.params.numserie } }).then(function(dbDevice) {
            res.json(dbDevice[dbDevice.length-1]);
        });   
    }); 
     */
    app.get("/device/numserie-last/:numserie", function(req, res) {
      db.Device.findOne({ where: { NumSerie: req.params.numserie },order: [ [ 'createdAt', 'DESC' ]]}).then(function(dbDevice) {
          res.json(dbDevice);
      });   
  });       
    


  // Delete an example by id
  app.delete("/device/:id", function(req, res) {
    db.DeviceType.destroy({ where: { id: req.params.id } }).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });
};
