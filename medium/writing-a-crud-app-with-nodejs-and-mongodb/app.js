const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Import routes for the products
const product = require('./routes/product.route');

// initialize our express app
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

let dev_db_url = 'mongodb://localhost/products'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;	
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error!'));
db.once('open', function() {
	console.log('DB connected!');
});

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});