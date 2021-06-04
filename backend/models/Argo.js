const mongoose = require('mongoose');

const ArgoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('series', ArgoSchema);