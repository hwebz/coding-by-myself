const Mongoose = require('mongoose');
const uri = `mongodb+srv://hwebz:Dkbndkmvkl@1993@blog-app-wsp6o.mongodb.net/test?retryWrites=true`;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
}

Mongoose.connect(uri, options).then(function() {
    console.log('Database connection established!');
}, function(err) {
    console.log('Error connecting Database instance ue to: ', err)
})