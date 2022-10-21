const express = require('express');
const tourController = require('../controllers/tour.controller');
const TourRouter = express.Router();

TourRouter
    .post('/tours', tourController.postTour)
    .get('/tours', tourController.getAllTours)
    .get('/tour/trending', tourController.getTrendingTour)
    .get('/tour/cheapest', tourController.getChepestTour)
    .get('/tours/:id', tourController.getATour)
    .patch('/tour/:id', tourController.patchUpdateATour)

module.exports = TourRouter
