//var userName = prompt("what is your name?");
//alert("nice to meet you " + userName);
//console.log("Also great to meet you, " + userName);
//
//var fName = prompt("what is your first name?: ");var LName= prompt("what is your last name?: ");var age= prompt("what is your last age?: ");var space = " ";alert("your full name is: " + fName + " "+ LName);alert("your age is: " + age);console.log("your full name is: " + fName + " "+ LName);console.log("you are " + age + " " + "years old");

//var age= prompt("how old are you: "); alert("Days you have been alive: " + age * 365.25); //0.25 is to account for the leapy year
var age = Number(prompt("how old are you: ")); //using Numbers specifies to other that i am working with numbers.
console.log(age);
//var age =prompt("how old are you: ");

//if (age < 0){alert("Error Message");}
//else if (age==21){alert("Happy  21st Birthday");}

if(age < 18 ){
	alert("ascess denied");
}
if(age == 21){
	alert("happy twenty first Birthday");
}

else if(age >=21 ){ 
	alert("welcome, and you are allowed to drink");
}
else if( age < 0){
	alert("error message");
}
else if(age % 2 !== 0){
	alert("your age is odd");
}

else{
	alert("you can enter but not drink ")
}


//var odd = 
//if(age == ) {}
