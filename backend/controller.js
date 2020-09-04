const { validationResult } = require('express-validator');
const fetch = require('node-fetch');
require('dotenv').config();

const apikey = process.env.API_KEY;

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

//get the list of movies
const getMoviesList = async (req, res, next) => {
    const {title, page} = req.params;

    //error if express-validator conditions are not met.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    //build full url
    const url = `https://www.omdbapi.com/?s=${title}&page=${page}&type=movie&r=json&apikey=${apikey}`;

    //fetch using url
    res.json(await fetchData(url));
}

//get details on specific movie
const getMovieDetails = async(req, res, next) => {
    const title = req.params.title;

    //error if express-validator conditions are not met.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    //build full url
    const url = `https://www.omdbapi.com?t=${title}&r=json&apikey=${apikey}`;
    
    //fetch using url
    res.json(await fetchData(url));
}

exports.getMoviesList = getMoviesList;
exports.getMovieDetails = getMovieDetails;