var length = document.querySelectorAll(".drum").length;

// Detecting clicks

for (i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHTML = this.innerHTML;

    makeSound(innerHTML);

    buttonAnimation(innerHTML);

  });
}

//Detecting keyboard presses

document.addEventListener("keydown", function(event) {
     var key = event.key;

     makeSound(key);

     buttonAnimation(key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var myAudio = new Audio("sounds/tom-1.mp3");
      myAudio.play();
      break;

    case "a":
      var myAudio = new Audio("sounds/tom-2.mp3");
      myAudio.play();
      break;

    case "s":
      var myAudio = new Audio("sounds/tom-3.mp3");
      myAudio.play();
      break;

    case "d":
      var myAudio = new Audio("sounds/tom-4.mp3");
      myAudio.play();
      break;

    case "j":
      var myAudio = new Audio("sounds/snare.mp3");
      myAudio.play();
      break;

    case "k":
      var myAudio = new Audio("sounds/crash.mp3");
      myAudio.play();
      break;

    case "l":
      var myAudio = new Audio("sounds/kick-bass.mp3");
      myAudio.play();
      break;

    default:
       console.log(key);
  }
}

function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
     activeButton.classList.remove("pressed");
   }, 200);
}
