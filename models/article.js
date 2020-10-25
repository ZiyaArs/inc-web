const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: String,
    postcontent: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: String,
    images: {
        type: Object,
    }
});


module.exports = mongoose.model("Article", articleSchema);