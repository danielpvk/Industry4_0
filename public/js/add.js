// Get references to page elements
var $processText = $("#process-name");
var $processDescription = $("#process-description");
var $device1name=$("#device_name1");
var $device1type=$("#device1_type");
var $device2name=$("#device_name2");
var $device2type=$("#device2_type");
var $device3name=$("#device_name3");
var $device3type=$("#device3_type");
var $device4name=$("#device_name4");
var $device4type=$("#device4_type");
var $device5name=$("#device_name5");
var $device5type=$("#device5_type");
var $id1= $("#iddevice1");
var $id2= $("#iddevice2");
var $id3= $("#iddevice3");
var $id4= $("#iddevice4");
var $id5= $("#iddevice5");
var $submitBtn = $("#submit");
var $processList = $("#process-list");
var $addprocess =$("#add-new-process");
var $processStatus=$(".status");
var devicetypes=["","","","",""];
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
    Device1_type: $device1type.val(),
    Device1_type_description:$("#device1_type option:selected").text(),
    IdDevice1: $id1.val(),
    Device2_name: $device2name.val().trim(),
    Device2_type: $device2type.val(),
    Device2_type_description:$("#device2_type option:selected").text(),
    IdDevice2: $id2.val(),
    Device3_name: $device3name.val().trim(),
    Device3_type: $device3type.val(),
    Device3_type_description:$("#device3_type option:selected").text(),
    IdDevice3: $id3.val(),
    Device4_name: $device4name.val().trim(),
    Device4_type: $device4type.val(),
    Device4_type_description:$("#device4_type option:selected").text(),
    IdDevice4: $id4.val(),
    Device5_name: $device5name.val().trim(),
    Device5_type: $device5type.val(),
    Device5_type_description:$("#device5_type option:selected").text(),
    IdDevice5: $id5.val(),
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
    //refreshExamples();
    ;
  });
  $processText.val("");
  $processDescription.val("");
};

// Script to retrieve de device type table
var API_D = {
  getDevices: function() {
    return $.ajax({
      url: "api/devicetype",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/devicetype/" + id,
      type: "DELETE"
    }); 
  }
};
// Script to print the devicetypes
var getDeviceTypes = function(divtype) {
  
  API_D.getDevices().then(function(data) {
    console.log("****////");
    divtype.empty();
    //var aux=("<select>"); 
    var aux=("");
    $.each(data,function(i,val){
      aux=aux.concat("<option value=",val.id,">",val.DeviceTypeDescription);
    });   
    //var aux=aux.concat("</select>");
    console.log("aux: ",aux);
    divtype.append(aux);
    console.log(divtype); 
    
  });
};

//Add the device types to each of the device_types divs

var refreshDeviceTypes=function(){
   getDeviceTypes($device1type);
   getDeviceTypes($device2type);
   getDeviceTypes($device3type);
   getDeviceTypes($device4type);
   getDeviceTypes($device5type);
  
};

refreshDeviceTypes();
$submitBtn.on("click", handleFormSubmit);

