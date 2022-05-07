
exports.up = function(knex) {
  return knex.schema.createTable('settlements', table => {
        table.increments();
        table.text('name')
    })
    .createTable('companyforms', table => {
      table.increments();
      table.text('name')
     })
    .createTable('partners', table => {
        table.increments();
        table.text('name');
        table.integer('companyform_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('companyforms')
             .onDelete('CASCADE')
             .onUpdate('CASCADE')
        table.text('tax_number');
        table.text('company_reg_number');
        table.integer('settlement_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('settlements')
             .onDelete('CASCADE')
             .onUpdate('CASCADE')
        table.text('address');
        table.text('phone_number');
        table.text('bank_account_number');
        table.text('comment');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('partners').dropTableIfExists('settlements')
};
