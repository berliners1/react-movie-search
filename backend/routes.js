const express = require('express');

const controller = require('./controller');
const router = express.Router();

//example: https://website.com/api/s=batman&page=1
router.get('/s=:title&page=:page', controller.getMoviesList);

//example: https://website.com/api/t=batman
router.get('/t=:title', controller.getMovieDetails);

module.exports = router;