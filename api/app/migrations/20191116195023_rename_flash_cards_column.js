exports.up = function(knex) {
  return knex.schema.table("flash_cards", function (t) {
    t.renameColumn("descriptions", "description");
  });
};

exports.down = function(knex) {
  return knex.schema.table("principals", function (t) {
    t.renameColumn("description", "descriptions");
  });
};
