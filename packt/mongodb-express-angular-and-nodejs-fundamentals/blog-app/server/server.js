const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const hostname = 'hwebz';
const port = process.env.PORT || 4000;

const todoData = [
    {id: 1, task: 'Have Breakfast'},
    {id: 1, task: 'Read Book'},
    {id: 1, task: 'Have Lunch'},
    {id: 1, task: 'Start Meeting'}
]

app.set('view engine', 'pug');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', { TodoList: todoData });
})

app.use(function(err, req, res, next) {
    if (err) res.render('500');

    next()
})

app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
})