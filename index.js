i = 0;
while (i <= 7) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    soundProduce(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

  document
    .querySelectorAll("button")
    [i].addEventListener("keydown", function (evt) {
      soundProduce(evt.key);
      buttonAnimation(evt.key);
    });
  i = i + 1;
}

function soundProduce(keyPressedButtonKeyboard) {
  switch (keyPressedButtonKeyboard) {
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
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var j = new Audio("sounds/snare.mp3");
      j.play();
      break;

    case "k":
      var k = new Audio("sounds/crash.mp3");
      k.play();
      break;

    case "l":
      var l = new Audio("sounds/kick-bass.mp3");
      l.play();
      break;
    default:
      console.log(buttonText);
      break;
  }
}

function buttonAnimation(keyPressed) {
  var activeButton = document.querySelector("." + keyPressed);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
