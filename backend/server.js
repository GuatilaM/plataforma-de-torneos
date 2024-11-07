const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const TorneoRoute = require('./routes/toneo.route');

mongoose.connect('mongodb://127.0.0.1:27017/backend')
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('Could not connect to database: ' + error); 
    });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', TorneoRoute);

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.listen(port, () => {
    console.log('Express app listening on port: ' + port);
});

app.use((err, req, res, next) => {
    res.status(404).send('Error 404: not found');
});

app.use((err, req, res, next) => {
    console.error(err.message);
    const status = err.status || 500;
    res.status(status).send(err.message);
});
