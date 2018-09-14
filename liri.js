require("dotenv").config();
const moment = require("moment");
const fs = require("fs");
const inquirer = require("inquirer");
const request = require("request");
const Spotify = require("node-spotify-api");


// var spotify = new Spotify(keys.spotify);
let resA = "";
let resB = "";
inquirer
    .prompt([{
            type: "list",
            name: "a",
            choices: ["concert-this", "spotify-this", "movie-this", "do-what-it-says"],
            message: "Choose:"
        },
        {
            type: "input",
            message: "Search:",
            name: "b"
        }
    ])
    .then(answers => {

        let data = answers.a + ", " + answers.b + "||";
        // fs.appendFile("log.txt", data, function (err) {

        //     if (err) {
        //         return console.log(err);
        //     }

        //     console.log("random.txt was updated!");

        // });

        resA = answers.a;
        resB = answers.b;

        switch (resA) {
            case "concert-this":
                bands();
                break;

            case "spotify-this":
                spotifyThis();
                break;

            case "movie-this":
                omdb();
                break;

            case "do-what-it-says":
                doThis();
                break;
        }
    });

function lineDiv() {
    console.log("=========================================");
}

function bands() {
    let artist = resB;
    const bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    request(bandURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const venue = JSON.parse(body)[0].venue;
            const date = JSON.parse(body)[0].datetime;
            lineDiv();
            console.log("Name of the Venue: " + venue.name);
            console.log("Venue Location: " + venue.city + ", " + venue.country);
            console.log("Date of the Event: " + moment(date).format('L'));
            lineDiv();
        }
    })
};

function spotifyThis() {
    let song = resB;
    const spotify = new Spotify({
        id: "76200a5ac1f7486793be8f7e5d7b7340",
        secret: "916626bdbbef43b3af81acaa0e48f243"
      });
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
};

function omdb() {

};

function doThis() {

};