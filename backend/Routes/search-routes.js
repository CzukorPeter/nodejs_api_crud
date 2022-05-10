const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');
const Companyforms = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/search/
//const data = require('./data');
  
  
// Assign route
router.use('/', (req, res) => {
    console.log(req.query);
    res.send('TEST')
});




module.exports = router;