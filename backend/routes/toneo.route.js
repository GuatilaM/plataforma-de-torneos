const express = require('express');
const router = express.Router();
const Torneo = require('../models/Torneo');

router.get('/', async (req, res, next) => {
    try {
        const data = await Torneo.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;