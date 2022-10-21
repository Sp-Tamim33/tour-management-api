const TourModel = require("../models/tour.model")



exports.getAllTours = async (req, res) => {
    try {
        const result = await TourModel.find();
        res.send({ data: result })
    } catch (error) {
        res.send({ error: error.message })
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
        res.send({ error: error.message })
    }
}
exports.getATour = async (req, res) => {
    try {
        const { id } = req.params;
        await TourModel.updateOne({ _id: id }, { $inc: { viewCount: 1 } })
        const result = await TourModel.findById(id);
        res.send({ data: result })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.patchUpdateATour = async (req, res) => {
    res.send('patchUpdateATour')
}
exports.getTrendingTour = async (req, res) => {
    try {
        const result = await TourModel.find().sort("-viewCount").limit(3)
        res.send({ data: result })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.getChepestTour = async (req, res) => {
    try {
        const result = await TourModel.find().sort("price").limit(3)
        res.send({ data: result })
    } catch (error) {
        res.send({ error: error.message })
    }
}
