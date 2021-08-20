const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
// const hostname = '139.59.60.194';
const port = 3000;



app.use('/static', express.static(__dirname + '/static'))

app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    console.log(__dirname);
    console.log(path.join(__dirname, 'views'));
    fs.readFile('views/index.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
            res.send(data)
    });
})
app.get('/chat', (req, res) => {
    // fs.readFile('views/chat.html', 'utf8', function(err, data) {
    // if (err)
    //     console.log(err);
    // else
    params = {};
    res.status(200).render('views/chat.html', params);
    // res.send(data)
    // }
);
})
app.get('/docker', (req, res) => {
    fs.readFile('./views/docker.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
            res.status(200).render('index.html', params);
        res.send(data)
    });
})
app.get('/test', (req, res) => {
    fs.readFile('views/test.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
            res.send(data)
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})