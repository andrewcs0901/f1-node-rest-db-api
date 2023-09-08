const knex = require('knex')(require('../knexfile')[require('../configs/configs').NODE_ENV]);

const teams = {
    index: (_req, res, next) => {
        knex('teams')
            .then(teams => res.json(teams))
            .catch(next);
    },
    show: (req, res, next) => {
        knex('teams')
            .where('id', req.params.id)
            .then(teams => res.json(teams))
            .catch(next);
    },
    create: (req, res, next) => {
        knex('teams')
            .insert({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('teams')
                    .then(teams => res.json(teams));
            })
            .catch(next);
    },
    update: (req, res, next) => {
        knex('teams')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                nationId: req.body.nationId
            })
            .then(() => {
                knex('teams')
                    .then(teams => res.json(teams));
            })
            .catch(next);
    },
    delete: (req, res, next) => {
        knex('teams')
            .where('id', req.params.id)
            .del()
            .then((result) => res.status(result ? 204 : 404).json())
            .catch(next);
    }
};

module.exports = teams;