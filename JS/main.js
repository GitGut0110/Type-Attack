$(window).resize(function() {
  if ($(window).innerWidth() >= 1200) {
    $("#controls").removeClass("btn-group");
    $("#controls").addClass("btn-group-vertical");
  } else if ($(window).innerWidth() < 1200) {
    $("#controls").removeClass("btn-group-vertical");
    $("#controls").addClass("btn-group");
  }
});

console.log("main loaded");

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
var spawnBoost = 0;
var marathonMode = false;
// SOUNDS
hit = new sound("/sounds/lazer.mp3");
start = new sound("/sounds/laser2.mp3")
end = new sound("/sounds/gameover.mp3");
pop = new sound("/sounds/pop.mp3");
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.

//key entry should shift string
window.onload = function() {
  intro();

  if ($(window).width() > 1200) {
    $("#controls").toggleClass("btn-group btn-group-vertical");
  }
  document.getElementById("debug").onclick = function() {
    if (!isGameStarted) {
      str = ["d", "e", "f"];
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("easy").onclick = function() {
    if (!isGameStarted) {
      str = word.split("").sort(function(a, b) {
        return 0.5 - Math.random();
      });
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("fast").onclick = function() {
    if (!isGameStarted) {
      str = word.split("").sort(function(a, b) {
        return 0.5 - Math.random()});
      boost = 5;
      spawnBoost = 10;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("marathon").onclick = function() {
    marathonMode = true;
    if (!isGameStarted) {
      str = word.split("").sort(function(a, b) {
        return 0.5 - Math.random()});
      marathonMode = true;
      boost = 5;
      spawnBoost = 7;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("hell").onclick = function() {
    marathonMode = true;
    if (!isGameStarted) {
      str = word.split("").sort(function(a, b) {
        return 0.5 - Math.random()});
      boost = 10;
      //spawn boost < 19;
      spawnBoost = 13;
      startGame();
      isGameStarted = true;
    }
  };
  // START GAME FUNCTION
  function startGame() {

    //INITIAL STATE SETTINGS


    start.play();
    myObstacles = [];
    frames = 0;
    score = 0;
    ctx.clearRect(100, 0, canvas.width, canvas.height);
    interval = setInterval(gamePlay, 50);
  }

  // GAME DRAWING -----------------------------------------------------------------

  //END OF ON LOAD
};
