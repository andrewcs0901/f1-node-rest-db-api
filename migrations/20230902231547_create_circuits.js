/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('circuits', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('length').notNullable();
        table.integer('turns').checkPositive().notNullable();
        table.time('lapRecord');
        table.dateTime('date').notNullable();
        table.integer('nationId').notNullable();

        table.foreign('nationId').references('id').inTable('nations');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('circuits');
};
