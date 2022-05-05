
exports.up = function(knex) {
  return knex.schema.createTable('settlements', table => {
        table.increments()
        table.text('settlement_name')
    })
    .createTable('partners', table => {
        table.increments()
        table.text('name')
            .notNullable()
        table.integer('settlemet_id')
            .unsigned()
            .references('id')
            .inTable('settlements')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('partners').dropTableIfExists('settlemens')
};
