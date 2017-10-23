$('document').ready(function(){

  function rolodexPerson(name, number){
    this.name = name;
    this.number = number;
  }
  var userID = 0;
  var rolodexArr = [];
  $("#rolodexForm").submit(function(event) {
    event.preventDefault();
    userID++;
    var userName = $("#nameInput").val();
    var userNumber = $("#numberInput").val();
    rolodexArr.push(new rolodexPerson(userName, userNumber));
    console.log(rolodexArr);
    //display entries in roloxdex
    $("#directoryDiv").empty();
    for (i=0; i<rolodexArr.length; i++){
      $("#directoryDiv").prepend("<div id='rolodexArrIndex"+i+"' class='card'><p>Name: "+rolodexArr[i].name+"</p></div>");

    }
  });

});
