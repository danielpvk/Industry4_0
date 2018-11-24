// Get references to page elements
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
var $graph1=$("#graph1");
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
  },
  getDeviceNumSerieLast100:function(numSerie){
    return $.ajax({
        url: "/device/numserie-last100/"+numSerie,
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
var getDeviceLastLecture = function(divtype,serie,type,graphD) {
  
    API_D.getDevices(type).then(function(data1){
       
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
                }
     
                var gauges=[];
                for (var h=0;h<parameters.length;h++){
                    gauges.push([parameters[h],lectures[h+1]]);
                }
                switch (gauges.length) {
                    case (0): ;
                }
                if (gauges[0]){
                    google.charts.setOnLoadCallback(function(){
                        drawChart(gauges[0],max[0],graphD+"_1")});
                }
                if (gauges[1]){
                    google.charts.setOnLoadCallback(function(){
                        drawChart(gauges[1],max[1],graphD+"_2")});
                    }
                if (gauges[2]){
                    google.charts.setOnLoadCallback(function(){
                        drawChart(gauges[2],max[2],graphD+"_3")});
                    }
                if (gauges[3]){
                    google.charts.setOnLoadCallback(function(){
                        drawChart(gauges[3],max[3],graphD+"_4")});
                    }
                if (gauges[4]){
                    google.charts.setOnLoadCallback(function(){
                        drawChart(gauges[4],max[4],graphD+"_5")});
                    }
            });//api_d closing bracket
    });
};

//check if the parameter exist, if the parameter=0, cleans the screen in the parameter div
var ifParameter=function(id,divData,divText,typeD,g){
    if (id!=0){
        getDeviceLastLecture(divData,id,typeD,g);
    }
    else
    {
        divText.html("");
    }
}
//Call the function to fill the data of each parameter
var refreshDeviceLectures=function(){
    ifParameter($idD1.text(),$div1,$d1,$type1.text(),"graph1");
    
    ifParameter($idD2.text(),$div2,$d2,$type2.text(),"graph2");
    ifParameter($idD3.text(),$div3,$d3,$type3.text(),"graph3");
    ifParameter($idD4.text(),$div4,$d4,$type4.text(),"graph4");
    ifParameter($idD5.text(),$div5,$d5,$type5.text(),"graph5");
};
google.charts.load('current', {'packages':['gauge']});
refreshDeviceLectures();
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(initialize);



function drawChart(gauges,maximo,graphDiv) {
         var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          gauges
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5,
          max:maximo,
          greenFrom:maximo*0.40,
          greenTo:maximo*0.80,
          yellowFrom:maximo*0.80,
          yellowTo:maximo*0.90,
          redFrom:maximo*.90,
          redTo:maximo
        };

        var chart = new google.visualization.Gauge(document.getElementById(graphDiv));

        chart.draw(data, options);
}//the end of drawchart gauge

function initialize() {  //a function to initialize dinamic charts
    var opts = {sendMethod: 'auto'};
    // Replace the data source URL on next line with your data source URL.
    API_Device.getDeviceNumSerieLast100(1234).then(function(data) {
        console.log("last 100",data);
        var table=new Array();
        table.push(['Age', 'Weight']);
        for (var i=0;i<data.length;i++){
            table.push(["lectura",data[i].LectureP1]);
        }
        console.log("tabla",table);
        var data2 = google.visualization.arrayToDataTable(table,false);
        console.log("********",data2);
      
          var options = {
            width: 200,
            height: 300,
            title: 'Age vs. Weight comparison',
            hAxis: {title: 'Age', minValue: 0, maxValue: 30},
            vAxis: {title: 'Weight', minValue: 0, maxValue: 30},
            legend: 'none'
          };

      
          var chart = new google.visualization.ScatterChart(document.getElementById("dispersion1_1"));

          chart.draw(data2, options);

    });
   
    
  }

  function handleQueryResponse(response) {  // a function to generate the dinamic query table

    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }
  
    var data = response.getDataTable();
    var chart = new google.visualization.PieChart(document.getElementById("dispersion3_1"));
    chart.draw(data, {width: 400, height: 240, is3D: true});
  }

