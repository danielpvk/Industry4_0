// Get references to page elements
var $processText = $("#process-name");
var $processDescription = $("#process-description");
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

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    console.log(data);
    var $process = data.map(function(example) {
      console.log ("******** PROCESS MAPPING");
      console.log(example.Object);
      var $a = $("<a>")
        .text(example.Process_name)
        .attr("href", "/process/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("delete");

      $li.append($button);

      return $li;
    });
    $processList.empty();
    $processList.append($process);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var process = {
    Process_name: $processText.val().trim(),
    Process_Description: $processDescription.val().trim()
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

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  console.log("entre al delete");
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$processList.on("click", ".delete", handleDeleteBtnClick);

