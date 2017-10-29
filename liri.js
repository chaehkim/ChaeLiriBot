var request = require("request");
// var twitter = require("twitter");
// var spotify = require("spotify");

var userOption = process.argv[2];
var userChoice = process.argv[3];

if (userOption === "movie-this") {
    if (userChoice === undefined) {
        var userChoice = "Mr. Nobody";
        var omdbURL = "http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&apikey=40e9cece";
        getOMDB(omdbURL);
    } else { 
        var omdbURL = "http://www.omdbapi.com/?t=" + userChoice + "&y=&plot=short&apikey=40e9cece";
        getOMDB(omdbURL) }
};
function getOMDB() {
    request(omdbURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Year Released: " + JSON.parse(body).Year);
            console.log("IMDB's Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomato's Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Produced In: " + JSON.parse(body).Production);
            console.log("Languages In: " + JSON.parse(body).Language);
            console.log("Plot Summary: " + JSON.parse(body).Plot);
            console.log("Acors: " + JSON.parse(body).Actors);
        };
    });
}
// Add Else if userOption === Twitter
// Add Else if userOption === Spotify
