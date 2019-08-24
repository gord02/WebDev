function average(arr){
	
	var totalSum= 0;
for(var i in arr) {
    totalSum += arr[i];
}
console.log(Math.round(totalSum/arr.length))//prints it out 
	// ^
// //or|
	// |
	// 	\
	var total=0;
	scores.forEach(function(score){
		total += score;
		console.log(average(score));//prints it out
	})
	//or
		num = 0;
	for(var i=0; i < arr.length; i++){
		 num=num+arr[i];//adds the enitre array to zero, ya its that easy :/
		console.log(num)
		console.log(Math.round(num/arr.length))//prints it out
	}

}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [46, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores);
//average(scores2);
