exports.up = function(knex) {
  return knex.schema.createTable('flash_cards', function (table) {
    table.increments('id');
    table.string('word').notNullable();
    table.string('descriptions');
    table.string('image_url').notNullable();
    table.string('category');
    table.integer('difficulty').notNullable();
    table.timestamp('last_reviewed').defaultTo(knex.fn.now())
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("flash_cards");
};