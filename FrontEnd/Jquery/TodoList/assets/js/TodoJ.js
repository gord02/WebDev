//check of specific todo by checking
$("ul").on("click", "li", function(){//add ul to parent so it incasses all future elements not just existinf ones which would be the three li
	$(this).toggleClass("completed");
});	
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

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//grbbing new todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + todoText + "</li>")//append add text to specificed element i.e li: append adds stuff
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});