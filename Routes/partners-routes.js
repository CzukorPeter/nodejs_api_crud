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

//findPartnerById
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Partners.findPartnerById(id)
    .then(partner => {
        if (partner) {
            res.status(200).json(partner)
        } else {
            res.status(404).json({ message: "cant find partner id"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant perform api call"})
    });
});

module.exports = router;