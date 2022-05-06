const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/partners/

//findPartners
router.get('/', (req, res) => {
    Partners.findPartners(req.body)
    .then(partner => {
        res.status(200).json(partner)
    })
    .catch(error => {
        res.status(500).json({ message: "cant find partners"})
    });
});

module.exports = router;