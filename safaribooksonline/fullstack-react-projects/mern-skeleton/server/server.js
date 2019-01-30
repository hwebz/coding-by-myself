import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info("Server started on port %s.", config.port)
})

// use native ES6 Promise
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true
})

mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`)
}).once('open', db => {
    console.log(`Connected to MongoDB database at: ${config.mongoUri}`)
})
