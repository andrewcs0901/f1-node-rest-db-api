const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

const teams = {
    index: (req, res) => {
        knex('teams')
            .then(teams => res.json(teams));
    },
    show: (req, res) => {
        knex('teams')
            .where('id', req.params.id)
            .then(teams => res.json(teams));
    },
    create: (req, res) => {
        knex('teams')
            .insert({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('teams')
                    .then(teams => res.json(teams));
            });
    },
    update: (req, res) => {
        knex('teams')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('teams')
                    .then(teams => res.json(teams));
            });
    },
    delete: (req, res) => {
        knex('teams')
            .where('id', req.params.id)
            .del()
            .then(() => {
                knex('teams')
                    .then(teams => res.json(teams));
            });
    }
};

module.exports = teams;