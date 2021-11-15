const uuid = require('uuid-v4');

// exports.up = function (knex) {
//   return knex.raw('create extension if not exists "uuid-ossp"');
// };

exports.up = function (knex) {
  knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255).notNullable();
    table.string("role", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

// exports.down = function (knex) {
//   return knex.raw('drop extension if exists "uuid-ossp"');
// };
