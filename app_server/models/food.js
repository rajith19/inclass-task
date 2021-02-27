const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    type: {
        type: String,
        required: true
    }
});
