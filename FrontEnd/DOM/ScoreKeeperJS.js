//SELCTIONS (to than manipulate)
//====================================
var buttonp1 = document.querySelector("#p1");
var buttonp2 = document.querySelector("#p2");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver= false;
var winningScore = 5;
var resetButton = document.getElementById("reset");
var numInput= document.querySelector("input");
var p = document.querySelectorAll("p");
var winningScoreDisplay= document.querySelector("p span");


buttonp1.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		console.log(p1Score, winningScore);
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}	
});

buttonp2.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
p1Display.classList.remove("winner");
p2Display.classList.remove("winner");
gameOver = false;
}

numInput.addEventListener("change", function(){
	//alert("changed the input");                //numInput=this
	winningScoreDisplay.textContent = this.value;
	winningScore= Number(this.value);//chane input which is usally a string value into a number
	reset();
	//"value changed"
	//p.textContent= "value changed!"
});//change is like the click key but instead whenever the value is simply changed not matter how it was changed via click or type.
