/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('teams', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('nationId').notNullable();

        table.foreign('nationId').references('id').inTable('nations');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('teams');
};
