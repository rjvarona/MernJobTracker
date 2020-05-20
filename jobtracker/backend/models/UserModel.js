const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    Name: {type: String, minlength: 3},
    DOB: {type: Date},
    preferredJob: {type: string},

}, {
    timestamps: true,
})


const User = mongoose.model('User', userSchema);

modeul.exports = User;