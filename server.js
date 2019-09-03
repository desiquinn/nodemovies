const express = require('express');0

const server = express();

server.use = express.json();

let movieId = 5;
let actorId = 3;
let actors = [
    {
        id: 1,
        name: "Elijah Wood",
        movies: [1,2]
    },
    {
        id: 2,
        name: "Chris Evans",
        movies:[4]
    },
];
let movies = [
    {
        id: 1,
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5,
    },

    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4,
    },

    {
        id: 3,
        name: "The Children of Hurin",
        released: false,
        rating: null,
    },

    {
        id: 4,
        name: "Avengers Endgame",
        released: true,
        rating: 5,
    }
    
];

server.get('/', (req, res) => {
    res.status(200).json({api: 'up...'});
});


//test query string: localhost:8000/api/movies?minrating=4
server.get('/api/movies', (req, res) => {
    const minRating = req.query.minrating

    let result = [...movies];

    //if the client provide min rating, filter response
    if(minRating) {
        result = movies.filter(m => m.rating >= minRating);
    }
    res.status(200).json(result);
});

// get a list of all the actors
server.get('/api/actors', (req, res) => {
    res.status(200).json(actors);
});

server.post('/api/movies', (req, res) => {
    //grab data from body
    const movie= req.body;
    //add the new id (auto increment)
    movie.id = movieId ++;
    //add to  array
    movies.push(movie);
    //return correct http status code for operation
    res.status(201).json(movies);
});

server.delete('/api/movies/:id', (req, res) => {
    const id = req.params.id;

    movies = movies.filter(m => m.id !== Number(id))

    res.status(200).json(movies);
});


// export default server; // ES2015 Modules
module.exports = server; // CommonJS modules (node)