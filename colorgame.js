var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();	// Mode Button Event Listeners
	setUpSquares();	// Squares Event Listeners
	reset();	// Reset the game
}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			// alert(clickedColor + pickedColor);
			// Here player wins the game
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct :)";
				resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again :(";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS";
	for(var i = 0;i < squares.length;i++)
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
		
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i])
// 			squares[i].style.background = colors[i];
// 		else
// 			squares[i].style.display = "none";
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}

// });

resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	for (var i = 0;i< squares.length; i++)
		squares[i].style.background = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	// rgb(r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}