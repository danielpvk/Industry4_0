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
    db.Device.findOne({ where: { id: req.params.id } }).then(function(
      dbDevice
    ) {
      res.render("device", {
        device: dbDevice
      });
    });
  });

  app.get("/device/numserie/:numserie", function(req, res) {
    db.Device.findAll({ where: { NumSerie: req.params.numserie } }).then(
      function(dbDevice) {
        res.json(dbDevice);
      }
    );
  });

  /*
    app.get("/device/numserie-last/:numserie", function(req, res) {
        db.Device.findAll({ where: { NumSerie: req.params.numserie } }).then(function(dbDevice) {
            res.json(dbDevice[dbDevice.length-1]);
        });
    });
     */
  app.get("/device/numserie-last/:numserie", function(req, res) {
    db.Device.findOne({
      where: { NumSerie: req.params.numserie },
      order: [["createdAt", "DESC"]]
    }).then(function(dbDevice) {
      res.json(dbDevice);
    });
  });
  // Get info for Alexa
  app.post("/alexa", function(req, res) {
    db.Device.findOne({
      limit: 1,
      order: [["id", "DESC"]]
    }).then(function(dbDevice) {
      console.log("Entro una solicitud de Alexa");
      //console.log(req.body);
      console.log(JSON.stringify(dbDevice));
      console.log(
        "Resultado DB: Temp:  " +
          dbDevice.LectureP1 +
          "    Humedad:  " +
          dbDevice.LectureP2
      );
      var respuesta = {
        version: "1.0",
        response: {
          shouldEndSession: false,
          outputSpeech: {
            type: "SSML",
            text: "Puerco !",
            ssml:
              "<speak>La temperatura del equipo es, " +
              dbDevice.LectureP1 +
              " grados, y la humedad es de " +
              dbDevice.LectureP2 +
              " porciento.  Quiero contarte un secreto: <amazon:effect name='whispered'>No soy un humano de verdad!,</amazon:effect>, ¿lo puedes creer?</speak> "
          }
        }
      };

      res.send(respuesta);
    });
  });

  // Get info for Alexa
  app.post("/alexa/en", function(req, res) {
    db.Device.findOne({
      limit: 1,
      order: [["id", "DESC"]]
    }).then(function(dbDevice) {
      console.log("Entro una solicitud de Alexa");
      //console.log(req.body);
      console.log(JSON.stringify(dbDevice));
      console.log(
        "Resultado DB: Temp:  " +
          dbDevice.LectureP1 +
          "    Humedad:  " +
          dbDevice.LectureP2
      );
      var respuesta = {
        version: "1.0",
        response: {
          shouldEndSession: false,
          outputSpeech: {
            type: "SSML",
            text: "Puerco !",
            ssml:
              "<speak>The temperature is, " +
              dbDevice.LectureP1 +
              " degrees celsius, an the humidity is " +
              dbDevice.LectureP2 +
              " percent</speak> "
          }
        }
      };

      res.send(respuesta);
    });
  });

  // Delete an example by id
  app.delete("/device/:id", function(req, res) {
    db.DeviceType.destroy({ where: { id: req.params.id } }).then(function(
      dbDevice
    ) {
      res.json(dbDevice);
    });
  });
};
