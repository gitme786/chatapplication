const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;



app.use('/static', express.static(__dirname + '/static'))


app.get('/', (req, res) => {
    fs.readFile('views/index.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
            res.send(data)
    });
})
app.get('/chat', (req, res) => {
    fs.readFile('views/chat.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
            res.send(data)
    });
})
app.get('/docker', (req, res) => {
    fs.readFile('views/docker.html', 'utf8', function(err, data) {
        if (err)
            console.log(err);
        else
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