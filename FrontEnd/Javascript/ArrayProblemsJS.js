alert("C!");

function printReverse(arr) {
	for (var i = arr.length -1; i >= 0; i--) {
	//                      ^ to start at the end of the array. arr.length is the entire word or sting etc so -1 is the last charcter
	console.log(arr[i]);
	}
};

printReverse(["h", "e", "l", "l","o"]); //this is where the second function is passed in
//This function prints a word backwards. 

//--------------------------------------------------------------------------------------------------------

function isUniform(arrArgu){
	var first = arrArgu[0];
	for (var i = 0; i < arrArgu.length; i++) {
//by passing in i whihc was set to zero you can make the code iterate thorugh changing the value of i to go along with the loop starting at 0
		if (  arrArgu[i] !== first){
			return false;
		}
	}
	return true;
}

isUniform([1,2,3,4]);
isUniform([5,5,5,5,]);

//---------------------------------------------------------------------------------------------------------------------

function sumArray(arry){
	var Total =0;
	// for (var i = arry[0]; i < arry.length; i++) {
	// 	console.log(arry[i] + arry[i]);
	// 	}
	arry.forEach(function(element){
		Total += element;
	});
return Total;
}


// function sumArray(arry){
// 	var Total =0;
// 	for (var i = arry[0]; i < arry.length; i++) {
// 	 	i++;
// 	 	console.log(Total);
// 	 	}
// return Total;
// }
sumArray([1,2])

//takes array
sumArray([1,2,3,4]);

//---------------------------------------------------------------------------------------------------------------------

function max(arry){
var Big = arry[0];
	for( var i = 1; i < arry.length; i++ ){
		if(arry[i] > Big){
			Big = arry[i];
		}
	}
	return Big;
}
//----------------------------------------------------------------------------------------
// for reach


