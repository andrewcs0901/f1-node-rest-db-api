const knox = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

const circuits = {
    index: (req, res) => {
        knex('circuits')
            .then(circuits => res.json(circuits));
    },
    show: (req, res) => {
        knex('circuits')
            .where('id', req.params.id)
            .then(circuits => res.json(circuits));
    },
    create: (req, res) => {
        knex('circuits')
            .insert({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('circuits')
                    .then(circuits => res.json(circuits));
            });
    },
    update: (req, res) => {
        knex('circuits')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('circuits')
                    .then(circuits => res.json(circuits));
            });
    },
    delete: (req, res) => {
        knex('circuits')
            .where('id', req.params.id)
            .del()
            .then(() => {
                knex('circuits')
                    .then(circuits => res.json(circuits));
            });
    }
};

module.exports = circuits;