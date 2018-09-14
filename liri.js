require("dotenv").config();
const fs = require("fs");
const inquirer = require("inquirer");

// var spotify = new Spotify(keys.spotify);
let res = "";
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
        // fs.appendFile("random.txt", data, function (err) {

        //     if (err) {
        //         return console.log(err);
        //     }

        //     console.log("random.txt was updated!");

        // });

        res = answers.a;

        switch (res) {
            case "concert-this":
                bands();
                break;

            case "spotify-this":
                spotify();
                break;

            case "movie-this":
                omdb();
                break;

            case "do-what-it-says":
                doThis();
                break;
        }
    });

function bands() {
    console.log("test");
    console.log(res);
    // let artist = res;
    // const bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    // console.log(bandURL[0].venue.name)
};

function spotify() {
    console.log("test");
    console.log(res);
};

function omdb() {
    console.log("test");
    console.log(res);
};

function doThis() {
    console.log("test");
    console.log(res);
};