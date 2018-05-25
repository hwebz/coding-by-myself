const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/posts')

var db = mongoose.connection

db.on('error', console.error.bind(console, "connection error"))
db.once('open', (callback) => {
    console.log("Connection Succeeded")
})

var Post = require('../models/post')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    // res.send(
    //     [{
    //         title: "Hello world",
    //         description: "Hi there! How are you? dasd asd"
    //     }]
    // )
    Post.find({}, 'title description', (error, posts) => {
        if (error) console.error(error)

        res.send({
            posts: posts
        })
    }).sort({_id: -1})
})

app.post('/posts', (req, res) => {
    var db = req.db
    var title = req.body.title
    var description = req.body.description

    var new_post = new Post({
        title: title,
        description: description
    })
    console.log(req.body);
    new_post.save((error) => {
        if (error) console.error(error)

        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

app.get('/post/:id', (req, res) => {
    var db = req.db
    Post.findById(req.params.id, 'title description', (error, post) => {
        if (error) console.error(error)

        res.send(post)
    })
})

app.post('/posts/:id', (req, res) => {
    var db = req.db
    Post.findById(req.params.id, 'title description', (error, post) => {
        if (error) console.error(error)

        post.title = req.body.title
        post.description = req.body.description
        post.save((error) => {
            if (error) console.error(error)

            res.send({
                success: true
            })
        })
    })
})

app.delete('/posts/:id', (req, res) => {
    var db = req.db
    Post.remove({
        _id: req.params.id
    }, function(error, post) {
        if (error) res.send(error)
        res.send({
            success: true
        })
    })
})

app.listen(process.env.PORT || 8081);