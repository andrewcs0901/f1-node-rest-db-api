/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('circuits').del()
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
};
