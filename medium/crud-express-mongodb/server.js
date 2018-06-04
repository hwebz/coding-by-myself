const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db
// for using req.body form data format
app.use(bodyParser.urlencoded({extended: true}))
// for using json format
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

MongoClient.connect('mongodb://admin:123456@ds161162.mlab.com:61162/star-wars-quotes', (error, database) => {
    if (error) console.error(error)

    db = database.db('star-wars-quotes')
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.post('/quotes', (req, res) => {
    //db.collection('quotes').save(req.body, (error, result) => {
    db.collection('quotes').save({
        name: req.body.name,
        quote: req.body.quote
    }, (error, result) => {
        if (error) console.error(error)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.put('/quotes', (req, res) => {
    db.collection('quotes').findOneAndUpdate({name: 'JimiDARK'}, {
        $set: {
            name: req.body.name,
            quote: req.body.quote
        }
    }, {
        sort: {_id: -1}, // searching from the newest entry
        upsert: true // insert if no entries are found
    }, (error, result) => {
        if (error) res.send(error)
        res.send(result)
    })
})

app.delete('/quotes', (req, res) => {
    db.collection('quotes').findOneAndDelete({name: req.body.name}, (error, result) => {
        if (error) return res.send(500, error)
        res.send({
            message: 'A JimiDARK quote got deleted'
        })
    })
})

app.get('/', (req, res) => {
    var cusor = db.collection('quotes').find().toArray((error, results) => {
        if (error) console.error(error)

        res.render('index.ejs', {quotes: results})
    })
    //res.sendFile(__dirname + '/index.html')
})