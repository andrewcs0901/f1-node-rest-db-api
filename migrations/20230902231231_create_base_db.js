/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('nations', table => {
    table.increments('id');
    table.string('name').unique().notNullable();
  })
    .then(() => {
      return knex.schema.createTable('teams', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('nationId').notNullable();

        table.foreign('nationId').references('id').inTable('nations');
      });
    })
    .then(() => {
      return knex.schema.createTable('circuits', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.double('length').notNullable();
        table.integer('turns').checkPositive().notNullable();
        table.time('lapRecord');
        table.dateTime('date').notNullable();
        table.integer('nationId').notNullable();
        
        table.foreign('nationId').references('id').inTable('nations');
      });
    })
    .then(() => {
      return knex.schema.createTable('drivers', table => {
        table.increments('id');
        table.string('name').notNullable();
        table.string('number').notNullable();
        table.integer('teamId');
        table.integer('nationId').notNullable();

        table.foreign('teamId').references('id').inTable('teams');
        table.foreign('nationId').references('id').inTable('nations');
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('drivers')
  .then(() => {
    return knex.schema.dropTable('circuits');
  })
  .then(() => {
    return knex.schema.dropTable('teams');
  })
  .then(() => {
    return knex.schema.dropTable('nations')
  });
};
