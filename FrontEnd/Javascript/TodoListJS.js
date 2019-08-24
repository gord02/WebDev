console.log("connected!")
//window.setTimeout(function)
window.setTimeout(function() {
  // put all of your JS code from the lecture here

var todos =["Buy New Turtle"];
var input = prompt("what would you like to do?");

while (input !== "quit"){
	//handle input
	if(input === "list" ){
	listTodos();
	}
	else if (input === "new"){
	addTodo();
	}
	else if (input === "delete"){
	deleteTodo();
	}
	//ask again for new input
	 input = prompt("what would you like to do?");

	function listTodos(){
	console.log("**********");
		todos.forEach(function (PlaceholderName, index){
 		console.log(index + ": " + PlaceholderName)
		});
		console.log("**********");
	}
	function addTodo(){
	//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Added Todo");
	}
	function deleteTodo(){
			//ask for index of todo to be deleted
	var index = prompt("enter index of todo to delete");
		//delete that todo
	//splice()
	todos.splice(index, 1); //splice deletes elemnts anywhere inside the array
	console.log("Deleted Todo");
	}
}
	console.log("OK, YOU quite the app")





}, 500)

