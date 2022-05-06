// knes queries
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

//settlements
//settlement
//partners
//partner

module.exports = {
    addSettlement,
    findSettlements,
    findSettlementById,
    removeSettlementById,
    updateSettlementById,
    addPartner,
    findPartnerById,
};

async function addSettlement(settlement) {
  const [id] = await db('settlements').insert(settlement);
  return findSettlementById(id);
}

function findSettlements(){
    return db('settlements');
}

function findSettlementById(id){
    return db('settlements')
    .where({ id })
    .first();
}

function removeSettlementById(id){
    return db('settlements')
    .where({ id })
    .del();
}

function updateSettlementById(id, changes){
    return db('settlements')
    .where({ id })
    .update(changes)
    .then(() => {
        return findSettlementById(id);
    });
}

function findPartnerById(id){
    return db('partners')
    .where({ id })
    .first();
}


async function addPartner(partner, settlement_id) {
    const [id] = await db('partners')
    .where({ settlement_id })
    .insert(partner);
    return findPartnerById(id);
  }