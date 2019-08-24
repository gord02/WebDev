//alert("connected")

// 	var answer = prompt("are we there yet?")
// while (answer !== "yes" || answer !== "ya"){
// 	var answer = prompt("are we there yet?");
// }
// alert("Yay, we made it!!") //this will not run untill the while loop is finished



//version 2
var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
}checks if the word yes is in a sentence

alert("Yay,we made it!!")
