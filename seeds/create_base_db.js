/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('nations').del()
  await knex('teams').del()
  await knex('circuits').del()
  await knex('drivers').del()

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

  await knex('teams').insert([
    {id: 1, name: 'McLaren', nationId: 1},
    {id: 2, name: 'Red Bull', nationId: 2},
    {id: 3, name: 'Mercedes', nationId: 3},
    {id: 4, name: 'Alpine', nationId: 4},
    {id: 5, name: 'Ferrari', nationId: 5},
    {id: 6, name: 'AlphaTauri', nationId: 5},
  ]);

  await knex('circuits').insert([
    {
      id: 1,
      name: 'Albert Park Circuit',
      length: 5.278,
      turns: 14,
      lapRecord: '01:20.235',
      date: '2023-04-2',
      nationId: 7
    },
    {
      id: 2,
      name: 'Silverstone Circuit',
      length: 5.891,
      turns: 18,
      lapRecord: '01:27.097',
      date: '2023-07-16',
      nationId: 1
    },
    {
      id: 3,
      name: 'Autodromo Nazionale Monza',
      length: 5.793,
      turns: 11,
      lapRecord: '01:21.046',
      date: '2023-09-10',
      nationId: 5
    }
  ]);

  await knex('drivers').insert([
    {id: 1, name: 'Lando Norris', number: '4', teamId: 1, nationId: 1},
    {id: 2, name: 'Oscar Piastri', number: '88', teamId: 1, nationId: 7},
    {id: 3, name: 'Daniel Ricciardo', number: '3', teamId: 6, nationId: 7},
    {id: 4, name: 'Max Verstappen', number: '1', teamId: 2, nationId: 8},
    {id: 5, name: 'Lewis Hamilton', number: '44', teamId: 3, nationId: 1},
  ]);

};
