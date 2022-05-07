// knes queries
const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    addSettlement,
    findSettlements,
    findSettlementById,
    removeSettlementById,
    updateSettlementById,
    findSettlementPartners,

    addCompanyform,
    findCompanyforms,
    findCompanyformById,
    removeCompanyformById,
    updateCompanyformById,
    findCompanyformPartners,


    addPartner,
    findPartners,
    findPartnerById,
    removePartnerById,
    updatePartnerById,
};

//settlements
//settlement

async function addSettlement(settlement) {
  const [id] = await db('settlements').insert(settlement);
  return findSettlementById(id);
}

function findSettlements(key){
    return db('settlements')
    .where({ key })
    .first();;
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


//companyforms
//companyform

async function addCompanyform(companyform) {
  const [id] = await db('companyforms').insert(companyform);
  return findCompanyformById(id);
}

function findCompanyforms(){
    return db('companyforms');
}

function findCompanyformById(id){
    return db('companyforms')
    .where({ id })
    .first();
}

function removeCompanyformById(id){
    return db('companyforms')
    .where({ id })
    .del();
}

function updateCompanyformById(id, changes){
    return db('companyforms')
    .where({ id })
    .update(changes)
    .then(() => {
        return findCompanyformById(id);
    });
}


//partners
//partner

async function addPartner(partner, settlement_id, companyform_id) {
  const [id] = await db('partners')
  .where({ settlement_id, companyform_id })
  .insert(partner);
  return findPartnerById(id);
}

function findPartners(){
    return db('partners as p')
    .leftJoin("settlements as s", "s.id", "p.settlement_id",)
    .leftJoin("companyforms as c", "c.id", "p.companyform_id")
    .select(
      "p.id",
      "p.name",
      "c.name as companyform",
      "p.tax_number",
      "company_reg_number",
      "s.name as settlements",
      "p.address",
      "p.phone_number",
      "p.bank_account_number",
      "p.comment"
     );
     //.orderBy('p.name', 'asc')
    ;
}

function findPartnerById(id){
  return db('partners as p')
  .where({ id })
  .first();
}

function removePartnerById(id){
  return db('partners')
  .where({ id })
  .del();
}

function updatePartnerById(id, changes){
  return db('partners')
  .where({ id })
  .update(changes)
  .then(() => {
      return findPartnerById(id);
  });
}

function findSettlementPartners(settlement_id) {
    return db("settlements as s")
      .leftJoin("partners as p", "s.id", "p.settlement_id")
      .leftJoin("companyforms as c", "c.id", "p.companyform_id")
      .select(
        "p.id",
        "p.name",
        "c.name as companyform",
        "p.tax_number",
        "company_reg_number",
        "s.name as settlements",
        "p.address",
        "p.phone_number",
        "p.bank_account_number",
        "p.comment"
       )
      .where({ settlement_id });
  }

  function findCompanyformPartners(companyform_id) {
    return db("companyforms as c")
      .leftJoin("partners as p", "c.id", "p.companyform_id")
      .leftJoin("settlements as s", "s.id", "p.settlement_id")
      .select(
        "p.id",
        "p.name",
        "c.name as companyform",
        "p.tax_number",
        "company_reg_number",
        "s.name as settlements",
        "p.address",
        "p.phone_number",
        "p.bank_account_number",
        "p.comment"
      )
      .where({ companyform_id });
  }