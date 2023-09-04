/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('drivers', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('number').notNullable();
        table.integer('teamId');
        table.integer('nationId').notNullable();

        table.foreign('teamId').references('id').inTable('teams');
        table.foreign('nationId').references('id').inTable('nations');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('drivers');
};
