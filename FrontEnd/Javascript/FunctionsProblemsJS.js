// function isEven(a){
// //	console.log("type number: ")
// 	if(a % 2 == 0){
// 		return(true)
// 	}
// 	else{
// 		return(false)
// 	}
// };
//or

function isEven(num){
	return num % 2 ===0;
	//num mod 2 == 0 is a statment which can only return true or false
}




function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i= 2; i <= num; i++){
		result *=i;
	}
	//return the result variable
	return result;
}

function factorial(num){
	
	if(num === 0){
		return 1;
	}

	var result= num;
	for(var i = num-1; i>=1; i++){
		result *=1;
	}// to do this in reverse use this
}



factorial (5);

function kebabToSnake(str){
//replace all dashes with underscores
var newStr = str.replace(/-/g, "_");
//return str
return newStr;
}
//kebabToSnake(hello-world);


this is syntax:
setInterval(anotherFunc, interval)it takes to arguments
setInterval(sing,1000)100 refers to how many miliseconds : the units are in miliseconds.  sing is anoth function which doesnt need brackets becuase the code is being excuted by t=another function and thus the name need only be passed thorugh


