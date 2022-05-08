const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');
const Companyforms = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/partners/

//addPartner
router.post('/', (req, res) => {
    Partners.addPartner(req.body)
    .then(partner => {
        res.status(200).json(partner)
    })
    .catch(error => {
        res.status(500).json({ message: "partner not inserted"})
    });
});

router.get('/', (req, res) => {
    Partners.findPartners()
    .then(partner => {
        if (partner) {
            res.status(200).json(partner)
        } else {
            res.status(404).json({ message: "cant find partners ujra..."})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant perform api call"})
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

//removePartnerById
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Partners.removePartnerById(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "partner successfully deleted"})
        } else {
            res.status(404).json({ message: "cant find partner id to delete"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant delete id"})
    });
});

//updatePartnerById
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Partners.updatePartnerById(id, changes)
    .then(partner => {
        if(partner) {
            res.status(200).json({ partner })
        } else {
            res.status(404).json({ message: "cant find partner id to update"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant update id"})
    });
});


module.exports = router;