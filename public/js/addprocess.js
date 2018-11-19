// Get references to page elements
var $devices = $("#devices");
var $qdevices =$("#qdevices");
// The API object contains methods for each kind of request we'll make
var labeldevice='<label for="device-name';
var labeldevice2='">Device '
var labeldevice2_2=' Name</label></input>';
var labeldevice3='<input type="text" id="device_name';
var labeldevice4='" class="form-control" aria-describedby="device_name';
var labeldevice5='" placeholder="Enter the Device Name">';

var handleDevices=function(){
  var i=$qdevices.val();
  $devices.html("");
  for (var j=0;j<i;j++)
  {  
    $devices.append(labeldevice.concat(j+1,labeldevice2,j+1,labeldevice2_2));
    console.log(labeldevice);
    $devices.append(labeldevice3.concat(j+1,labeldevice4,j+1,labeldevice5));
    console.log(labeldevice3);
    
  }
}

// Add event listeners to the submit and delete buttons
$qdevices.change(handleDevices);

