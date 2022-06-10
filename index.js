//function to detect which sound to play accoding to button/key
function whatToPlay(buttonKey){
    switch (buttonKey) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "j":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "k":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        default:
          console.log(buttonKey);
          break;
      }
}

//adding animation

function buttonAnimation(currentKey){
    var activePart = document.querySelector("."+currentKey);
    activePart.classList.add("pressed");
    setTimeout(function() {activePart.classList.remove("pressed")}, 100);
}

//detects which button was klicked
var i = 0;
var buttons = document.querySelectorAll(".drum");
while (i < buttons.length) {
  buttons[i].addEventListener("click", function () {
    var buttonClick = this.innerHTML;
    whatToPlay(buttonClick);
    buttonAnimation(buttonClick);
    
  });
  i++;
}
//detect the key
document.addEventListener("keydown", function (event) {
    whatToPlay(event.key);
    buttonAnimation(event.key);
});

