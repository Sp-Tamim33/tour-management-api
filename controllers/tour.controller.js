const TourModel = require("../models/tour.model")



exports.getAllTours = async (req, res) => {
    try {

        const queries = {};
        if (req.query.sort) {
            const sortby = req.query.sort.split(',').join(' ');
            queries.sortby = sortby
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields
        }
        if (req.query.page) {
            const { page = 1, limit = 3 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = limit;
        }

        const total = await TourModel.find({}).countDocuments();
        const pageCount = Math.ceil(total / queries.limit);
        const result = await TourModel
            .find({})
            .sort(queries.sortby)
            .select(queries.fields)
            .skip(queries.skip)
            .limit(queries.limit);
        res.send({ totalTourPlace: total, pageCount: pageCount, data: result })
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
    try {
        const { id } = req.params;
        const result = await TourModel.updateOne({ _id: id }, { $set: req.body }, {
            runValidators: true
        })
        res.send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.send({ error: error.message })
    }
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
