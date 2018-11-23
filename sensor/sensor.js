var sensorLib = require("node-dht-sensor");

var request = require("request");

var headers = {
  "User-Agent": "Super Agent/0.0.1",
  "Content-Type": "application/x-www-form-urlencoded"
};

var sensor = {
    sensors: [ {
        name: "Bootcamp",
        type: 11,
        pin: 17
    } ],
    read: function() {
        for (var a in this.sensors) {
            var b = sensorLib.read(this.sensors[a].type, this.sensors[a].pin);
            console.log(this.sensors[a].name + ": " +
              b.temperature.toFixed(1) + "C, " +
              b.humidity.toFixed(1) + "%");
              var options = {
          url: "http://ec2-52-23-247-197.compute-1.amazonaws.com/device",
          method: "POST",
          headers: headers,
          form: { NumSerie: 1234, LectureP1: b.temperature.toFixed(1), LectureP2: b.humidity.toFixed(1) }
        };
    
        request(options, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body);
          }
        });   
        }
        setTimeout(function() {
            sensor.read();
        }, 60000);
    }
};

sensor.read();

