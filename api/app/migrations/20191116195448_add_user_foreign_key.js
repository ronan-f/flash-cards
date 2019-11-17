exports.up = function(knex) {
  return knex.schema.table("flash_cards", function (table) {
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function(knex) {
  return knex.schema.table("flash_cards", function (table) {
    table.dropColumn("user_id");
  });
};

