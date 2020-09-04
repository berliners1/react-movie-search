const express = require('express');
const { param } = require('express-validator');

const controller = require('./controller');
const router = express.Router();

//example: https://website.com/api/s=batman&page=1
router.get('/s=:title&page=:page', [
    param('title').isLength({min: 1}).trim().escape(),
    param('page').isLength({min: 1}).isNumeric().trim().escape()
], controller.getMoviesList);

//example: https://website.com/api/t=batman
router.get('/t=:title', [
    param('title').isLength({min: 1}).trim().escape()
], controller.getMovieDetails);

module.exports = router;