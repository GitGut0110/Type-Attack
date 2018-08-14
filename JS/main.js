$(window).resize(function() {
 if ($(window).innerWidth() >= 1200) {
   $('#controls').removeClass('btn-group');
   $('#controls').addClass('btn-group-vertical');
   }else if ($(window).innerWidth() < 1200) {
   $('#controls').removeClass('btn-group-vertical');
   $('#controls').addClass('btn-group');
   }
  });

console.log("Gamelogic loaded");



var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var strAttack = [];
var attacker;
var isGameStarted = false;
var str = [];
var myObstacles = [];
var frames = 0;
var score = 0;
var topScore = 0;
var boost = 0;
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.

//key entry should shift string
window.onload = function() {
  // intro();
  
  
  
  
  if ($(window).width() > 1200) {
    $('#controls').toggleClass('btn-group btn-group-vertical');
  };
  document.getElementById("debug").onclick = function() {
    if (!isGameStarted) {
      str=['d','e','f'];
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("alpha").onclick = function() {
    if (!isGameStarted) {
      str = strAlph
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("fast").onclick = function() {
    if (!isGameStarted) {
      str = strAlph
      boost = 20;
      startGame();
      isGameStarted = true;
    }
  };

  // START GAME FUNCTION
  function startGame() {
//INITIAL STATE SETTINGS
    myObstacles = [];
    frames = 0;
    score = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    interval = setInterval(gamePlay, 50);
  }




  // GAME DRAWING -----------------------------------------------------------------


  //END OF ON LOAD
};
