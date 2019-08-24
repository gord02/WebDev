PROJECT NOTES AND EXMAPLES OF CODE TO LEARN FROM
========================================================

//click goes thorugh layer of span li ul div body html etc.. cslled event bubbling bubling 
//  or propagating up into parent functions. To prevent this you can tell it to not do this event.stopPropagation();

$("span").click(function(event){
	$(this).parent().remove();.parent() //allows us to target the parent element so in this case the span is removed as well as the li it containts. 
	event.stopPropagation();

//click on x to delet todo
$("span").click(function(event){
	$(this).parent().fadeOut(function(){
	$(this).remove();//this this refers to $(this).parent() i.e the li not just the span the two are diferent. 



//click on x to delet todo
$("ul").on("click", "span", function(event){
//|_____|
//	 \	
//	  \
	$(this).parent().fadeOut(500, function(){
//  |____________|
//   \     /	
//	  \   /
	$(this).remove();//this this refers to $(this).parent() i.e the li not just the span the two are diferent. 
	});//.parent() allows us to target the parent element so in this case the span is removed as well as the li it containts. 
	event.stopPropagation();
//click goes thorugh layer of span li ul div body html etc.. cslled event bubbling bubling 
//  or propagating up into parent functions. To prevent this you can tell it to not do this 
});

$("input[type = 'text']").keypess(function(event){
	if(event.which ===13){
		//grbbing new todo text from input
	var todoText =$(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span></span> " + todoText "</li>")//append add text to specificed element i.e li: append adds stuff


		//console.log("you hit enter")//onyl excutes when enter key is pressed this is because 13 
	}//is the key for enter

	//console.log("key Press"); every time any key is pressed this will print ky press
});

		// $(this).css({
		// 	color: "gray",
		// textDecoration: "line-through"
		// });//have to use camercase because erros will hapen wil names wiht dashes in 
		//them

//using the keyword this allows the click to be specific to whatever li was clicked not
// all



