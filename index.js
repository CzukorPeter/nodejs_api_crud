const express = require('express');
const Settlements = require('./models/restHelpers')

const server = express();

server.use(express.json());

const PORT = 1550;

//settlements
//settlement
//partners
//partner

//addSettlement
server.post('/api/settlements', (req, res) => {
    Settlements.addSettlement(req.body)
    .then(settlement => {
        res.status(200).json(settlement)
    })
    .catch(error => {
        res.status(500).json({ message: "settlement not inserted"})
    });
});

//findSettlements
server.get('/api/settlements', (req, res) => {
    Settlements.findSettlements(req.body)
    .then(settlement => {
        res.status(200).json(settlement)
    })
    .catch(error => {
        res.status(500).json({ message: "cant retrieve settlements"})
    });
});

//findSettlementById
server.get('/api/settlements/:id', (req, res) => {
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
server.delete('/api/settlements/:id', (req, res) => {
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
server.patch('/api/settlements/:id', (req, res) => {
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


server.get('/nodemon', (req, res) => {
    res.json({ nodemon: " Nodemon endpoint for testing nodeman tool."})
});

server.listen(1550, () => {
    console.log(`Server running at port: ${PORT}`);
})