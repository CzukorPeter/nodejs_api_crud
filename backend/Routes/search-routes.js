
// torolni az egeszet es letisztitani a kodot

const express = require('express')

const Settlements = require('../models/restHelpers');
const Partners = require('../models/restHelpers');
const Companyforms = require('../models/restHelpers');

const router = express.Router();

// all endpoints start /api/search/
//const data = require('./data');
  
  
// Assign route
router.use('/', (req, res) => {
    //console.log(req.query);
    const {search} = req.query
    let sortedPartners = [...Partners]
    
if(search){
    sortedPartners = sortedPartners.filter((partner)=>{
        return partner.name.startWith(search)
    })
}
res.status(200).json(sortedPartners)
    res.send('TEST')
});




module.exports = router;