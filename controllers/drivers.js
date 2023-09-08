const knex = require('knex')(require('../knexfile')[require('../configs/configs').NODE_ENV]);

const drivers = {
    index: (_req, res, next) => {
        knex('drivers')
            .then(drivers => res.json(drivers))
            .catch(next);
    },
    show: (req, res, next) => {
        knex('drivers')
            .where('id', req.params.id)
            .then(([drivers]) => res.status(drivers ? 200 : 404).json(drivers))
            .catch(next);
    },
    create: (req, res, next) => {
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
            })
            .catch(next);
    },
    update: (req, res, next) => {
        knex('drivers')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                teamId: req.body.teamId
            }, ['id', 'name', 'teamId', 'nationId'])
            .then(([driver]) => {
                res.status(driver ? 200 : 404).json(driver);
            })
            .catch(next);
    },
    delete: (req, res, next) => {
        knex('drivers')
            .where('id', req.params.id)
            .del()
            .then((result) => {
                res.status(result ? 204 : 404).json();
            })
            .catch(next);
    }
};

module.exports = drivers;