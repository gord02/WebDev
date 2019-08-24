var movieReview ={
	Movies: [frozen
	{Frozen},
	{John wick},
	{Endgame},
	{Despicable Me}
	]
}
//-------------------------------------------------------------------------------------------------------------------------
var movieReview {

	{Frozen:
		rating: "2 stars",
		Summary: "2 sisters",
		comments: ["meh", "bad", "decent"]
	},
	{John wick:
		rating: "2 stars",
		Summary: "2 sisters",
		comments: ["meh", "bad", "decent"]},
	{Endgame:
		rating: "2 stars",
		Summary: "2 sisters",
		comments: ["amzing", "good", "astonishing"]
	}
	{Despicable Me:
		rating: "2 stars",
		Summary: "2 sisters",
		comments: ["meh", "good", "decent"]
	}
}
//-----------------------------------working code--------------------------------------------------------------------------------------
var movieReview = {

	Frozen:[
		{rating: "2 stars"},
		{Summary: "2 sisters"},
		{comments: ["meh", "bad", "decent"]}
	],
	JohnWick: [
		{rating: "2 stars"},
		{Summary: "2 sisters"},
		{comments: ["meh", "bad", "decent"]}
	],
	Endgame: [
		{rating: "2 stars"},
		{Summary: "2 sisters"},
		{comments: ["amzing", "good", "astonishing"]}
	],
	DespicableMe: [
		{rating: "2 stars"},
		{Summary: "2 sisters"},
		{comments: ["meh", "good", "decent"]}
	]
}
//-------------------------------------------------------------------------------------------------------------------------
var movies = [
	{	title: "in Bruges",
		haswatched: true,
		rating: 5
	},

	{	title: "frozen",
		haswatched: true,
		rating: 4.5
	}
]
movies.forEach(function(movie){
	 console.log(result)
})

function buildString(movie){
	var result="You have ";
	 if (movie.haswatched){
	 	result += "watched";
	 }
	 else{
	 	result += "not seen ";
	 }
	 result += "\"" + movie.title + "\" - ";
	 result += movie.rating + "stars";
}


movies.forEach(function(movie){
	console.log(buildString(movie));
});