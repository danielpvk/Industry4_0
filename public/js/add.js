// Get references to page elements
var $processText = $("#process-name");
var $processDescription = $("#process-description");
var $device1name=$("#device_name1");
var $device1type=$("#device1_type");
var $device2name=$("#device_name2");
var $device3name=$("#device_name3");
var $device4name=$("#device_name4");
var $device5name=$("#device_name5");
var $submitBtn = $("#submit");
var $processList = $("#process-list");
var $addprocess =$("#add-new-process");
var $processStatus=$(".status");
// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    console.log("el json que envio al post");
    console.log(example);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/process",
      data: JSON.stringify(example)
    });
  },
   getExamples: function() {
    return $.ajax({
      url: "api/process",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/process/" + id,
      type: "DELETE"
    }); 
  }
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var process = {
    Process_name: $processText.val().trim(),
    Process_Description: $processDescription.val().trim(),
    Device1_name: $device1name.val().trim(),
    Device2_name: $device2name.val().trim(),
    Device3_name: $device3name.val().trim(),
    Device4_name: $device4name.val().trim(),
    Device5_name: $device5name.val().trim()
  };
  console.log("lo que lei de la forma")
  console.log(process);
  if (!(process.Process_name && process.Process_Description)) {
    alert("You must enter an a descripction of process!");
    return;
  }
  else{
    $processStatus.html('<a href="/">← Back To Home</a>'); 
    $processStatus.append("<h2>PROCESS ADDED!!</h2>");
  }

  API.saveExample(process).then(function() {
    refreshExamples();
    ;
  });
  $processText.val("");
  $processDescription.val("");
};

// Script to retrieve de device type table
var API_D = {
  getDevices: function() {
    return $.ajax({
      url: "api/device",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/device/" + id,
      type: "DELETE"
    }); 
  }
};
// Script to print the devicetypes
var refreshDeviceTypes = function() {
  API_D.getDevices().then(function(data) {
    console.log(data);
    var $devices= data.map(function(device) {
      console.log ("******** DEVICE TYPES");
      console.log(device);
       var $a = $("<a>")
        .text(device.DeviceTypeDescription)
        .attr("href", "/process/" + device.id);

       var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text(device.DeviceTypeDescription); 
      $a.append($button);
      return $a;
    });
    console.log("******** the appended code ***********");
    console.log($devices);
    $device1type.append($devices);
  });
};




//Add the device types to each of the device_types divs

// Add event listeners to the submit and delete buttons
refreshDeviceTypes();
$submitBtn.on("click", handleFormSubmit);

