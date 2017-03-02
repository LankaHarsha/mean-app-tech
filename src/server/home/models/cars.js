'use strict';
let mongoose = require('mongoose');

let CarSchema = mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    models: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Cars', CarSchema);