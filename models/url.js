const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        default: 0,
    }
});

const URL = mongoose.model('URLS', urlSchema);

module.exports = URL;
