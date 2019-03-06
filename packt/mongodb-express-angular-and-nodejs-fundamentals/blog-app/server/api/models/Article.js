const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

// Create database schema as an instance of Mongoose schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('ArticalModel', BlogSchema);