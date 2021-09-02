//image1

//generate a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//create the source address by moving to images folder/ dice then concatenating the number with .png
var randomImageSource1 =  "images/dice" + randomNumber1 + ".png";

//select the element that you want to change i.e first image and use setAttribute
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


//image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
