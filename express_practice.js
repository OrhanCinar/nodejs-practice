const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' }
];


app.get('/', (req, res) => {
    res.send('Hello again');
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    let item = courses.find(c => c.id === parseInt(req.params.id));

    if (item) {
        res.send(item);
    } else {
        res.status(404).send('Couse not found');
    }
})

app.post('/api/courses', (req, res) => {

    console.log(req);

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('invalid data');
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);

    res.send(course);
})


app.put('/api/courses/:id', (req, res) => {
    let item = courses.find(c => c.id === parseInt(req.params.id));

    if (item) {
        item.name = req.body.name;
        res.send(courses);
    } else {
        res.status(404).send('Course not found');
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));