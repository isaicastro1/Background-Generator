var input1 = document.querySelector(".color1")
var input2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var h1 = document.querySelector("h1")
var btn = document.querySelector("button")

body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";

function changeColor() {
	body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
	displayLG();
}

function displayLG() {
	h3 = document.querySelector("h3");
	h3.innerHTML = "Color 1 = " + input1.value + "   " + "Color 2 = " + input2.value;
}

function getRandom() {
   var symbols = "0123456789ABCDEF";
   var color = "#";
   for (var i = 0; i < 6; i++) {
   	color += symbols[Math.floor(Math.random() * 16)];
   } return color;
 }

function changeColorWithButton() {
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	h3.innerHTML = "Color 1 = " + color1 + "    " + "Color 2 = " + color2;
}

btn.addEventListener("click", () => {
	color1 = getRandom();
	color2 = getRandom();
	changeColorWithButton();
})

btn.classList.add("animate__animated", "animate__delay-1s", "animate__backInUp");

h1.classList.add("animate__animated", "animate__delay-0.5s", "animate__zoomInDown"); 

input1.addEventListener("input", changeColor);

input2.addEventListener("input", changeColor);

displayLG();
