const mongoose = require('mongoose');
const validator = require('validator');

// define schema
const task_schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
    due_date: {
        type: Date,
        default: Date.now()
    },
    completion_date: {
        type: Date
    },
    list: {
        type: mongoose.Schema.Types.ObjectId
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps : true
});

// assign schema to model
const task_schema_model = mongoose.model('Task', task_schema);

// export it without creating json object
module.exports = task_schema_model;