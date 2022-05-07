const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');
const Companyforms = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/settlemens/

//addSettlement
router.post('/', (req, res) => {
    Settlements.addSettlement(req.body)
    .then(settlement => {
        res.status(200).json(settlement)
    })
    .catch(error => {
        res.status(500).json({ message: "settlement not inserted"})
    });
});

//findSettlements
router.get('/', (req, res) => {
    Settlements.findSettlements(req.body)
    .then(settlement => {
        res.status(200).json(settlement)
    })
    .catch(error => {
        res.status(500).json({ message: "cant retrieve settlements"})
    });
});

//findSettlementById
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Settlements.findSettlementById(id)
    .then(settlement => {
        if (settlement) {
            res.status(200).json(settlement)
        } else {
            res.status(404).json({ message: "cant find settlement id"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant perform api call"})
    });
});

//removeSettlementById
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Settlements.removeSettlementById(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "settlement successfully deleted"})
        } else {
            res.status(404).json({ message: "cant find settlement id to delete"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant delete id"})
    });
});

//updateSettlementById
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Settlements.updateSettlementById(id, changes)
    .then(settlement => {
        if(settlement) {
            res.status(200).json({ settlement })
        } else {
            res.status(404).json({ message: "cant find settlement id to update"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "cant update id"})
    });
});


//ptr = partner in short
router.post("/:id/partners", (req, res) => {
    const { id } = req.params;
    const ptr = req.body;
  
    if (!ptr.settlement_id) {
        ptr["settlement_id"] = parseInt(id, 10);
    }
  
    Settlements.findSettlementById(id)
      .then((settlement) => {
        if (!settlement) {
          res.status(404).json({ message: "cant find settlement id" });
        }
        // Check for all required fields
        if (!ptr.name) {
          res
            .status(400)
            .json({ message: "need to provide required field values atm.: just name" });
        }
  
        Partners.addPartner(ptr, id)
          .then((partner) => {
            if (partner) {
              res.status(200).json({message: "partner successfully added" });
            }
          })
      })
      .catch((error) => {
        res.status(500).json({ message: "Error finding settlement" });
      });
  });

//findSettlementPartners
router.get("/:id/partners", (req, res) => {
    const { id } = req.params;
  
    Settlements.findSettlementPartners(id)
      .then((settlement) => {
        res.status(200).json(settlement);
      })
      .catch((error) => {
        res.status(500).json({ message: "Error retrieving messages" });
      });
  });


  
  module.exports = router;