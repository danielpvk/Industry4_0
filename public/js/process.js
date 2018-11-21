// Get references to page elements
var $div1=$("#div1");
var $div2=$("#div2");
var $div3=$("#div3");
var $div4=$("#div4");
var $div5=$("#div5");
var $id=$("#id");
var $idD1=$("#serial1");
var $type1=$("#type1");
// The API object contains methods for retrieve the lectures of the devices
var API_Device = {
  getDevices: function() {
    return $.ajax({
      url: "/device",
      type: "GET"
    });
  },
  getDeviceNumSerie:function(numSerie){
    return $.ajax({
        url: "/device/numserie/"+numSerie,
        type: "GET"
      }); 
  }, 
  getDeviceNumSerieLast:function(numSerie){
    return $.ajax({
        url: "/device/numserie-last/"+numSerie,
        type: "GET"
      }); 
  }
}

// Script to retrieve de device type table
var API_D = {
    getDevices: function(id) {
      return $.ajax({
        url: "/devicetype-raw/"+id,
        type: "GET"
      });
    },
  };

// Script to print the lectures of the devices
var getDeviceLastLecture = function(divtype,serie,type) {
  console.log("entre al get last lecture",serie,"tipo",type);
    API_D.getDevices(type).then(function(data1){
        console.log(data1);
        var parameters=[];
        var min=[];
        var max=[];
        if (data1.Parameter1_name){
            parameters.push(data1.Parameter1_name);
            min.push(data1.Parameter1_min_val);
            max.push(data1.Parameter1_max_val);
        }
            API_Device.getDeviceNumSerieLast(serie).then(function(data) {
                console.log("****////");
                divtype.empty();
                var aux="Actual "+parameters[0]+" :"+(data.LectureP1);
                console.log("aux: ",aux);
                divtype.append(aux);
                console.log(divtype); 
                
            });
    });
};

//Add the device types to each of the device_types divs

var refreshDeviceLectures=function(){
    getDeviceLastLecture($div1,$idD1.text(),$type1.text());
  
};

refreshDeviceLectures();

