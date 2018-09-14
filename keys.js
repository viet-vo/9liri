console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    id: process.env.OMDB_ID,
    secret: process.env.SPOTIFY_SECRET
};

var omdbKey = "4c27167a";
// http://www.omdbapi.com/?i=tt3896198&apikey=4c27167a
