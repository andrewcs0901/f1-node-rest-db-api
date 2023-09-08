const knex = require('knex')(require('../knexfile')[require('../configs/configs').NODE_ENV]);

const nations = {
    index: (req, res) => {
        knex('nations')
            .then(nations => res.json(nations));
    },
    show: (req, res) => {
        knex('nations')
            .where('id', req.params.id)
            .then(nations => res.json(nations));
    },
    create: (req, res) => {
        knex('nations')
            .insert({
                name: req.body.name
            })
            .then(() => {
                knex('nations')
                    .then(nations => res.json(nations));
            });
    },
    update: (req, res) => {
        knex('nations')
            .where('id', req.params.id)
            .update({
                name: req.body.name
            })
            .then(() => {
                knex('nations')
                    .then(nations => res.json(nations));
            });
    },
    delete: (req, res) => {
        knex('nations')
            .where('id', req.params.id)
            .del()
            .then(() => {
                knex('nations')
                    .then(nations => res.json(nations));
            });
    }
}

module.exports = nations;