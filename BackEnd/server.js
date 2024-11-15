const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors()); // Cross-Origin Resource Sharing that allows communication between the server and client

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use bodyParser to handle POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.zoem5.mongodb.net/DB14');

// Create a data model for the movie data
const movieSchema = new mongoose.Schema({
    title:String,
    year:String,
    poster:String
});

const movieModel = new mongoose.model('myMovies', movieSchema);

// Retrieve movie records from database
app.get('/api/movies', async (req, res) => { 
    const movies = await movieModel.find({}); // Fetch documents from 'movies' collection
    res.status(200).json({movies}) // Respond with the JSON 
});

// Search for movies in database by ID
app.get('/api/movies/:id', async (req,res) => {
    const movie = await movieModel.findById(req.params.id);
    res.json(movie);
})

// Add the data to MongoDB
app.post('/api/movies', async (req, res) => { // Client can send own movie details 
    console.log(req.body.title); // Output title to console
    const {title, year, poster} = req.body;

    const newMovie = new movieModel({title, year, poster});
    await newMovie.save(); // Ensures the movie is saved to the database before continuing on

    res.status(201).json({message: 'Movie created successfully', Movie:newMovie});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// [
//     {
//         "Title": "Avengers: Infinity War (Server)",
//         "Year": "2018",
//         "imdbID": "tt4154756",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//     },
//     {
//         "Title": "Captain America: Civil War (Server)",
//         "Year": "2016",
//         "imdbID": "tt3498820",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"

//     },
//     {
//         "Title": "World War Z (Server)",
//         "Year": "2013",
//         "imdbID": "tt0816711",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
//     }
// ];