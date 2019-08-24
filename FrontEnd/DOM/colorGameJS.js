var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
 var  modButtons = document.querySelectorAll(".mode");


init();
function init(){
	setupModeButtons();
	setUpSquares();
	reset();
	}

function setUpModeButtons(){
	for(var i = 0; i < modButtons.length; i++){
	 	modButtons[i].addEventListener("click", function(){
			modButtons[0].classList.remove("selected");
			modButtons[1].classList.remove("selected");
			this.classList.add("selected");
		 	this.textContent === "Easy" ? numSquares = 3: numSquares =6;//this is the same as an if sytatment// if(this.textcontent==="Easy"){// 	numSquares=3;// 	else{// 		numSquares= 6;// 	}// }	
			reset();
 		}); 
	}
}

function setUpButtons(){
	for(var i =0; i < squares.length; i++){
		// add click listener to sqaure
		squares[i].addEventListener("click", function(){
			//grab color of clicked sqaure
			var clickedColor = this.style.background;
			//compare color to pickedColor
			console.log(clickedColor, pickedColor)
			if(clickedColor === pickedColor){
				messageDisplay.textContent ="correct!";
				resetButton.textContent = "Play Again?"

				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else{
				//alert("Wrong!!!")
				this.style.background = "#232323";//hexidecimal number
				messageDisplay.textContent = "Try Again"
			}
		});}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i= 0; i < squares.length; i++){
		if(colors[i]){
			squares.style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display ="none";
		}
	}
	h1.style.background ="steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

	function changeColors(color){
		//loop through all sqaures
		for (var i = 0; i < squares.length; i++){
			//change each color to match given color
			squares[i].style.background = color;
		}
	}

	function pickColor(){
		 var random = Math.floor(Math.random() * colors.length); //this functions picks random numbers
		//math.floor is a function that removes everything after the decimal
		return colors[random];
	}
	function generateRandomColors(num){
		//make array
		var arr= [];
		//repeat num times
		for (var i=0; i < num; i++){
			//get random color and psuh into arr
			arr.push(randomColor())
		}
		//retunr that array
		return arr;
	}
	function randomColor(){
		//pick a "red" from 0 -255
		var r = Math.floor(Math.random() *256);
		//pick a "green" from 0 -255
		var g = Math.floor(Math.random() *256);			
		//pick a "blue" from 0 -255
		var b = Math.floor(Math.random() *256);
		return "rgb(" + r + ", " + g + ", " + b +")";
	}




//buttons
//=============
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares= 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor= pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";      // !!!!!!!!!!!!!!!!!!!!!!!!display!!!!!!!!!!!!!!!!!!!!!!!
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 	//if(colors[i]){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 		//document.getElementById("myDIV").style.display = "none"
	
// 	}

// });

//resetButton function code
//==============================
//generate all new colors

	// colors= generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "new colors";

	// messageDisplay.textContent = "";
	// //change colors of squares
	// for(var i= 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background ="steelblue";