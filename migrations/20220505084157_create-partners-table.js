
exports.up = function(knex) {
  return knex.schema.createTable('settlements', table => {
        table.increments();
        table.text('name')
    })
    .createTable('partners', table => {
        table.increments();
        table.text('name')
            .notNullable();
        table.integer('settlement_id')
            .unsigned()
            .references('id')
            .inTable('settlements')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('partners').dropTableIfExists('settlements')
};
