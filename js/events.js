//define functions here
function getIt() {
  $('p').click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      alert("The g key was pressed");
    }
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();

});
