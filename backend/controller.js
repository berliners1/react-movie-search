require('dotenv').config();

const apikey = process.env.API_KEY;

const getMoviesList = (req, res, next) => {
    const {title, page} = req.params;

    //build full url
    const url = `https://www.omdbapi.com/?s=${title}&page=${page}&type=movie&r=json&apikey=${apikey}`;

    //fetch using url
}

const getMovieDetails = async(req, res, next) => {
    const title = req.params.title;

    //build full url
    const url = `https://www.omdbapi.com?t=${title}&r=json&apikey=${apikey}`;
    
    //fetch using url
}

exports.getMoviesList = getMoviesList;
exports.getMovieDetails = getMovieDetails;