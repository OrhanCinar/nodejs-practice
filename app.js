const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//dynamic binding
app.use('/public', express.static(path.join(__dirname, 'static')));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    res.send('posted');
});

app.get('/example', (req, res) => {
    res.send('example route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.name}:${req.params.age}`);
});

app.listen(3000);