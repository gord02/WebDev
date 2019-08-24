alert("c")

var button = document.querySelector("button");
button.addEventListener("click", function(){
	//alert("clicked")
if(document.body.style.background == "purple"){
	document.body.style.background = "white"
}
else{
document.body.style.background = "purple";
}
})
//------------------------------------------------------------------------

var button = document.querySelector("button");
var IsPup = false;
button.addEventListener("click", function(){
	if(IsPup){
		document.body.style.background = "white";
	}
	else{
		document.body.style.background = "purple";
		IsPup = !IsPup;
	}
});
//-------------------------------------------------------------------------------------------------

button.addEventListener("click", function(){
	doucment.body.classList.toggle("purple");
});




// var IsPup = false;
// for (var i = 0; i<10 ; i++) {
		
// 	setInterval(function (){
// 		if(IsPup){
// 			butt.style.color = "purple";
// 		}
// 		else{
// 			butt.style.color = "white";
// 		}
// 	}, 1000);
// }

// var IsPup = false;
// 	setInterval(function (){
// 		if(IsPup){
// 			doucment.body.style.color = purple;
// 		}
// 		else{
// 			butt.style.color = white;
// 		}
// 	}, 1000);
