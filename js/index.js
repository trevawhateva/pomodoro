$(document).ready(function(){

  var sessionLength = 25;//default
  var breakLength = 5;//default
  var start = "START";
  var minutesLeft;
  var secondsLeft;
  var timeInterval;
  
  $("#session").text(sessionLength);
  $("#break").text(breakLength);
  $(".timer-txt h1").text(start);

  //decrease session time
  $("#dec1").on("click", function(event) {
    if(sessionLength > 0) {
      sessionLength -= 1;
      $("#session").text(sessionLength);
    }
  }); //end decrease session time

  //increase session time
  $("#inc1").on("click", function(event) {
    sessionLength += 1;
    $("#session").text(sessionLength);
  }); //end increase session time

  //decrease break time
  $("#dec2").on("click", function(event) {
    if(breakLength > 0) {
      breakLength -= 1;
      $("#break").text(breakLength);
    }
  }); //end decrease break time

  //increase break time
  $("#inc2").on("click", function(event) {
    breakLength += 1;
    $("#break").text(breakLength);
  }); //end increase break time

  //session timer function
  var sessionCount = function() {
    timeInterval = setInterval(function() {

      if(minutesLeft > 0 && secondsLeft == 0) {
        minutesLeft -= 1;
        secondsLeft = 59;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft > 10) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft <= 10 && secondsLeft > 1) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + ":0" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft == 1) {
        minutesLeft -= 1;
        secondsLeft = 59;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft > 10) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + "0:" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft <= 10 && secondsLeft >= 1) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + "0:0" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft == 0) {
        clearInterval(timeInterval);
        $(".alert").trigger('play');
        breakCount();
      }

    }, 1000);

  };
  //end session timer function

  //session timer function
  var breakCount = function() {

    minutesLeft = breakLength;
    secondsLeft = 0;

    timeInterval = setInterval(function() {

      if(minutesLeft > 0 && secondsLeft == 0) {
        minutesLeft -= 1;
        secondsLeft = 59;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft > 10) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft <= 10 && secondsLeft > 1) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + ":0" + secondsLeft);
      } else if(minutesLeft > 0 && secondsLeft == 1) {
        minutesLeft -= 1;
        secondsLeft = 59;
        $("#timer-btn h1").text(minutesLeft + ":" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft > 10) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + "0:" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft <= 10 && secondsLeft >= 1) {
        secondsLeft -= 1;
        $("#timer-btn h1").text(minutesLeft + "0:0" + secondsLeft);
      } else if(minutesLeft == 0 && secondsLeft == 0) {
        clearInterval(timeInterval);
        $(".alert").trigger('play');
        sessionCount();
      }

    }, 1000);

  };
  //end session timer function

  //start button
  $("#timer-btn").on("click", function(event){
    $("#timer-btn").fadeOut("slow", function(){
      start = sessionLength;
      minutesLeft = sessionLength;
      secondsLeft = 0;
      $("#timer-btn h1").text(minutesLeft + ":0" + secondsLeft).css({"font-size": "112px", "margin-top": "16%"});
      $("#timer-btn").removeClass("timer-txt")
             .addClass("timer-start")
             .fadeIn("slow", function(){
                                        
      });//end animation
      
             sessionCount();

    });
  });//end start button click event

  //pause/resume button
  $(".stop").on("click", function(event){

    if($(".stop").hasClass("pause")) {
      clearInterval(timeInterval);
      $("#toggle").text("RESUME");
      $(".stop").removeClass("pause");
      $(".stop").addClass("resume");
    } else if($(".stop").hasClass("resume")) {
      $("#toggle").text("PAUSE");
      sessionCount();
      $(".stop").removeClass("resume");
      $(".stop").addClass("pause");
    }

  });
  //end pause/resume button

  //reset button
  $(".reset").on("click", function(){
    minutesLeft = sessionLength;
    secondsLeft = 0;
    $("#timer-btn h1").text(minutesLeft + ":0" + secondsLeft);
    $("#toggle").text("START");
  });
  //end reset button
  
}); //end document