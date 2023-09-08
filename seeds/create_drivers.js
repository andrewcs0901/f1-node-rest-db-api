/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('drivers').del()
  await knex('drivers').insert([
    {id: 1, name: 'Lando Norris', number: '4', teamId: 1, nationId: 1},
    {id: 2, name: 'Oscar Piastri', number: '88', teamId: 1, nationId: 7},
    {id: 3, name: 'Daniel Ricciardo', number: '3', teamId: 6, nationId: 7},
    {id: 4, name: 'Max Verstappen', number: '1', teamId: 2, nationId: 8},
    {id: 5, name: 'Lewis Hamilton', number: '44', teamId: 3, nationId: 1},
  ]);
};
