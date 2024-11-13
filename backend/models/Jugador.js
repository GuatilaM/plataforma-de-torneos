const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jugadorSchema = new Schema({
    nombreJugador: String,
    emailJugador: String,
});

const Jugador = model('Jugador', jugadorSchema);
module.exports = Jugador;