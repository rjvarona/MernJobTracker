const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const jobSchema = new Schema({
    Name: {type: String, minlength: 3},
    Description: {type: String, minlength: 3},

}, {
    timestamps: true,
})


const Job = mongoose.model('Job', jobSchema);

modeul.exports = Job;