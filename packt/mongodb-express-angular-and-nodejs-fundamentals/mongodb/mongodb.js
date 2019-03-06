// Native MongoDB driver
// If you have 1M concurrent requests => App wil crash
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://hwebz:Dkbndkmvkl@1993@blog-app-wsp6o.mongodb.net/test?retryWrites=true`;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
};

MongoClient.connect(uri, options)
    .then(function(db) {
        accountsDb = db;
        collection = accountsDb.db('test');
        console.log('Successfully connected to MongoDB');
    })
    .catch(function(err) {
        console.log(err);
    })