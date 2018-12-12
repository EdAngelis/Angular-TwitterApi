const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({

    user:{type: String},
    name:{type: String},
    body:{type: String},
    likes :[{type: Number}],
    avatar:{type: String}
});

module.exports = mongoose.model('Tweet', tweetSchema);