const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const TorneoRoute = require('./routes/torneo.route');
const JugadorRoute = require('./routes/jugador.route');
const EquipoRoute = require('./routes/equipo.route');

const dbUri = process.env.DB_URI || "mongodb://127.0.0.1:27017/backend";

mongoose.connect(dbUri)
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
app.use('/torneos', TorneoRoute);
app.use('/jugadores', JugadorRoute);
app.use('/equipos', EquipoRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Express app listening on port: ' + port);
});

// app.use((err, req, res, next) => {
//     console.error(err.message);
//     res.status(404).send('Error 404: not found');
// });

app.use((err, req, res, next) => {
    console.error(err.message);
    const status = err.status || 500;
    res.status(status).send(err.message);
});
