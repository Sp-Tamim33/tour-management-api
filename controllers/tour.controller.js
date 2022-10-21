const TourModel = require("../models/tour.model")



exports.getAllTours = async (req, res) => {
    try {
        const result = await TourModel.find();
        res.send({ data: result })
    } catch (error) {
        res.send(error.message)
    }
}
exports.postTour = async (req, res) => {
    try {
        const result = await TourModel.create(req.body)
        res.send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.send(error.message)
    }
}
exports.getATour = async (req, res) => {
    res.send('getAtour')
}
exports.patchUpdateATour = async (req, res) => {
    res.send('patchUpdateATour')
}
exports.getTrendingTour = async (req, res) => {
    res.send('getTrendingTour')
}
exports.getChepestTour = async (req, res) => {
    res.send('getChepestTour')
}
