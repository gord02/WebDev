var num= -10; 

while(num <= 19){
	console.log(num);
	num++;
}

var num1 = 10;
while (num1<= 40){
	console.log(num1)
	num1+=2;
}
//======================================
var counter= 1;
while(counter <= 40){
	if(counter % 2 ===0){
		console.log(counter);
	} //this determines if a number is even or odd
counter+=2;
} 


//if(num4 % 2 ===0){} //this determines if a number is even or odd checks if number is divisble by 2
//====================================
var num2 =300;
while (num2 <=333){
	console.log(num2)
	num2+=3;
}
//====================================
//prints numbers that are divisble by 3 and 5. 
var num3 = 5;
while(num3 <=50){
	if(num3 % 5 ===0 && num3 % 3 === 0){
		console.log(num3);
	}
	num3++;
}
//=============================================================================================================================
console.log("========================================================================================================");

//for loops

for(var i = -10; i < 20; i++){
	console.log(i)
}

console.log("========================================================================================================");

for( var i = 10; i < 41; i += 2){
	console.log(i)
}

console.log("========================================================================================================");

for( var i = 300; i < 334; i += 3){
	console.log(i)
}
//or
for(var i= 300; i <=333; i++){
	if( i % 2 !== 0){
		console.log(i);
	}
}


console.log("========================================================================================================");

for( var i= 5; i <50; i++){
	if(i % 5 == 0 && i % 3 ==0 ){
		console.log(i)
	}
}
































