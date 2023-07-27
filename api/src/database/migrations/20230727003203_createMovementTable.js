/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('CATEGORIES', function(table){
        table.increments('ID').primary();
        table.string('NAME').notNullable();
        table.string('DESCRIPTION').nullable();
    })
     .createTable('MOVEMENTS', function(table){
        table.increments('ID').primary();
        table.string('TYPE').notNullable();
        table.string('NAME').notNullable();
        table.string('DESCRIPTION').nullable();
        table.decimal('VALUE').notNullable();
        table.string('DATE').nullable();
        table.string('ID_CATEGORY').nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('MOVEMENTS')
    .dropTable('CATEGORIES');
};
