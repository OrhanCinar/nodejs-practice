const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Joi = require('joi');

//dynamic binding
app.use('/public', express.static(path.join(__dirname, 'static')));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log('err : ' + err)
            res.send('error has occured ' + err);
        } else {
            res.send('success');
        }
        console.log(result)

    });

    //res.json({ success: true });
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