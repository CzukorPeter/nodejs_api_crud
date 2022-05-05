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
    updateSettlementById
};

async function addSettlement(settlement) {
  const [id] = await db('settlements').insert(settlement);
  return id;
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