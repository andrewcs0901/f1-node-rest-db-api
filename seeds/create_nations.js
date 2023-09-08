/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('nations').del()
  await knex('nations').insert([
    {id: 1, name: 'England'},
    {id: 2, name: 'Austria'},
    {id: 3, name: 'Germany'},
    {id: 4, name: 'France'},
    {id: 5, name: 'Italy'},
    {id: 6, name: 'Spain'},
    {id: 7, name: 'Australia'},
    {id: 8, name: 'Netherlands'},
  ]);
};
