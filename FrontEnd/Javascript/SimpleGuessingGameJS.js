alert("Hello");
var secretNumber = 11;
//or

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

alert(guess);


if(guess === secretNumber){
	alert("Correct Guess!!");
}
else if(guess > secretNumber){
	alert("To high");
}
//else if(guess < secretNumber){alert("To Low");}

else{
	alert("To Low");
	}

while(guess != secretNumber){

	var guess = Number(prompt("Guess a number"));

	if(guess === secretNumber){
		alert("Correct Guess!!");
	}
	else if(guess > secretNumber){
		alert("To high");
	}
	else{
		alert("To Low");
		}
}