const mongoose = require('mongoose');


// Create Schema
const TourSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Tour Name should be longer than 3 charecter'],
        required: true,
        unique: true
    },
    price: {
        type: Number,
        min: [0, 'Price cannot be Negative value'],
        required: true
    },
    image: {
        type: String,
        required: true,
        minLength: [5, 'Insert a Image Link']
    },
    viewCount: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

// Create Model
const TourModel = mongoose.model('TourMode', TourSchema);
module.exports = TourModel;

