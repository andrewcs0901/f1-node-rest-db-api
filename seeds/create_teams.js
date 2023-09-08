/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('teams').del()
  await knex('teams').insert([
    {id: 1, name: 'McLaren', nationId: 1},
    {id: 2, name: 'Red Bull', nationId: 2},
    {id: 3, name: 'Mercedes', nationId: 3},
    {id: 4, name: 'Alpine', nationId: 4},
    {id: 5, name: 'Ferrari', nationId: 5},
    {id: 6, name: 'AlphaTauri', nationId: 5},
  ]);
};
