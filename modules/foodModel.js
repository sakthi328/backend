const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name: String,
    restaurant_name: String,
    price: Number,
    rating: Number,
    image: String,
    location: String,
    expected_delivery: String
})


module.exports = mongoose.model("Food", foodSchema);