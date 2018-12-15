const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');



//dynamic binding
app.use('/public', express.static(path.join(__dirname, 'static')));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//custom middleware
app.use((req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/', (req, res) => {
    console.log(req.banana);
    req.send("Middleware");
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.name}:${req.params.age}`);
});

app.listen(3000);