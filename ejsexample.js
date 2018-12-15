const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');



//dynamic binding
app.use('/public', express.static(path.join(__dirname, 'static')));

//template engine
app.set('view engine', 'ejs');
app.get('/:userQuery', (req, res) => {
    res.render('index', {
        data: {
            userQuery: req.params.userQuery,
            searchResult : ['book1', 'book2', 'book3'],
            loggedIn : true,
            username : 'testUser'
        }
    });
})

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
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