$('document').ready(function(){

var userID = 0;

  $("#rolodexForm").submit(function(event) {
    event.preventDefault();
    console.log('s');
    userID++;
    var userName = $("#nameInput").val();
    var userNumber = $("#numberInput").val();
    $("#rolodexDiv").prepend("<div id='rolodexID"+userID+"'><h3>"+userName+"</h3><p>"+userNumber+"</p></div>");
  });

});
