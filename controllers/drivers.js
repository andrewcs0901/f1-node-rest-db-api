const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

const drivers = {
    index: (req, res) => {
        knex('drivers')
            .then(drivers => res.json(drivers));
    },
    show: (req, res) => {
        knex('drivers')
            .where('id', req.params.id)
            .then(drivers => res.json(drivers));
    },
    create: (req, res) => {
        knex('drivers')
            .insert({
                name: req.body.name,
                number: req.body.number,
                teamId: req.body.teamId,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('drivers')
                    .then(drivers => res.json(drivers));
            });
    },
    update: (req, res) => {
        knex('drivers')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                teamId: req.body.teamId
            })
            .then(() => {
                knex('drivers')
                    .then(drivers => res.json(drivers));
            });
    },
    delete: (req, res) => {
        knex('drivers')
            .where('id', req.params.id)
            .del()
            .then(() => {
                knex('drivers')
                    .then(drivers => res.json(drivers));
            });
    }
};

module.exports = drivers;