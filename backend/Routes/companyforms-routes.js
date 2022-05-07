const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');
const Companyforms = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/companyforms

//addCompanyform
router.post('/', (req, res) => {
    Companyforms.addCompanyform(req.body)
    .then(companyform => {
        res.status(200).json(companyform)
    })
    .catch(error => {
        res.status(500).json({ message: "companyform not inserted"})
    });
});

//findCompanyforms
router.get('/', (req, res) => {
    Companyforms.findCompanyforms(req.body)
    .then(companyform => {
        res.status(200).json(companyform)
    })
    .catch(error => {
        res.status(500).json({ message: "cant retrieve companyforms"})
    });
});

//findCompanyformById
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Companyforms.findCompanyformById(id)
    .then(companyform => {
        if (companyform) {
            res.status(200).json(companyform)
        } else {
            res.status(404).json({ message: "cant find companyform id"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant perform api call"})
    });
});

//removeCompanyformById
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Companyforms.removeCompanyformById(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "companyform successfully deleted"})
        } else {
            res.status(404).json({ message: "cant find companyform id to delete"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant delete id"})
    });
});

//updateCompanyformById
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Companyforms.updateCompanyformById(id, changes)
    .then(companyform => {
        if(companyform) {
            res.status(200).json({ companyform })
        } else {
            res.status(404).json({ message: "cant find companyform id to update"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant update id"})
    });
});

//findCompanyformPartners
router.get("/:id/partners", (req, res) => {
    const { id } = req.params;
  
    Companyforms.findCompanyformPartners(id)
      .then((companyform) => {
        res.status(200).json(companyform);
      })
      .catch((error) => {
        res.status(500).json({ message: "Error retrieving messages" });
      });
  });

  module.exports = router;