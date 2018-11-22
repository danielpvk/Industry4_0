// Get references to page elements
$.getScript("https://www.gstatic.com/charts/loader.js", function(){

    alert("Script loaded but not necessarily executed.");
 
 });

var $div1=$("#div1");
var $d1=$("#d1");
var $div2=$("#div2");
var $d2=$("#d2");
var $div3=$("#div3");
var $d3=$("#d3");
var $div4=$("#div4");
var $d4=$("#d4");
var $div5=$("#div5");
var $d5=$("#d5");
var $id=$("#id");
var $idD1=$("#serial1");
var $type1=$("#type1");
var $idD2=$("#serial2");
var $type2=$("#type2");
var $idD3=$("#serial3");
var $type3=$("#type3");
var $idD4=$("#serial4");
var $type4=$("#type4");
var $idD5=$("#serial5");
var $type5=$("#type5");
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
        if (data1.Parameter2_name){
            parameters.push(data1.Parameter2_name);
            min.push(data1.Parameter2_min_val);
            max.push(data1.Parameter2_max_val);
        }
        if (data1.Parameter3_name){
            parameters.push(data1.Parameter3_name);
            min.push(data1.Parameter3_min_val);
            max.push(data1.Parameter3_max_val);
        }
        if (data1.Parameter4_name){
            parameters.push(data1.Parameter4_name);
            min.push(data1.Parameter4_min_val);
            max.push(data1.Parameter4_max_val);
        }
        if (data1.Parameter5_name){
            parameters.push(data1.Parameter5_name);
            min.push(data1.Parameter5_min_val);
            max.push(data1.Parameter5_max_val);
        }
        API_Device.getDeviceNumSerieLast(serie).then(function(data) {
                console.log("****////");
                divtype.empty();
                var lectures=[];
                lectures.push(data.createdAt);
                if (data.LectureP1){
                    lectures.push(data.LectureP1);
                }
                if (data.LectureP2){
                    lectures.push(data.LectureP2);
                }
                if (data.LectureP3){
                    lectures.push(data.LectureP3);
                }
                if (data.LectureP4){
                    lectures.push(data.LectureP4);
                }
                if (data.LectureP5){
                    lectures.push(data.LectureP5);
                }
                for (var j=0;j<parameters.length;j++){
                    aux="";
                    var aux="     Actual "+parameters[j]+" :"+lectures[j+1]+"<br>";
                    divtype.append(aux);
                    console.log("aux: ",aux);
                }
            });
    });
};

//Add the device types to each of the device_types divs
var ifParameter=function(id,divData,divText,typeD){
    if (id!=0){
        getDeviceLastLecture(divData,id,typeD);
    }
    else
    {
        divText.html("");
    }
}

var refreshDeviceLectures=function(){
  /*   if ($idD1.text()!=0){
        getDeviceLastLecture($div1,$idD1.text(),$type1.text());
    }
    if ($idD2.text()!=0){
        getDeviceLastLecture($div2,$idD2.text(),$type2.text());
    }
    else
    {$d2.empty();}
    if ($idD3.text()!=0){
        console.log("idD3=",$idD3);
        getDeviceLastLecture($div2,$idD2.text(),$type2.text());
    }
    else
    {
        console.log("idD3=",$idD3);
        $d3.html("");
    }
    getDeviceLastLecture($div2,$idD2.text(),$type2.text());
    getDeviceLastLecture($div2,$idD2.text(),$type2.text()); */
    ifParameter($idD1.text(),$div1,$d1,$type1.text());
    ifParameter($idD2.text(),$div2,$d2,$type2.text());
    ifParameter($idD3.text(),$div3,$d3,$type3.text());
    ifParameter($idD4.text(),$div4,$d4,$type4.text());
    ifParameter($idD5.text(),$div5,$d5,$type5.text());
};

refreshDeviceLectures();

