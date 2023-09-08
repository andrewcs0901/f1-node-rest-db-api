const knex = require('knex')(require('../knexfile')[require('../configs/configs').NODE_ENV]);

const circuits = {
    index: (_req, res, next) => {
        knex('circuits')
            .then(circuits => res.json(circuits))
            .catch(next);
    },
    show: (req, res, next) => {
        knex('circuits')
            .where('id', req.params.id)
            .then(([circuits]) => res.status(circuits ? 200 : 404).json(circuits))
            .catch(next);;
    },
    create: (req, res, next) => {
        knex('circuits')
            .insert({
                name: req.body.name,
                length: req.body.length,
                turns: req.body.turns,
                lapRecord: req.body.lapRecord,
                date: req.body.date,
                nationId: req.body.nationId,
            }, ['id', 'name', 'length', 'turns', 'lapRecord', 'date', 'nationId'])
            .then((result) => {
                res.json(result);
            })
            .catch(next);
    },
    update: (req, res, next) => {
        knex('circuits')
            .where('id', req.params.id)
            .update({
                name: req.body.name,
                length: req.body.length,
                turns: req.body.turns,
                lapRecord: req.body.lapRecord,
                date: req.body.date,
                nationId: req.body.nationId,
            }, ['id',
                'name',
                'length',
                'turns',
                'lapRecord',
                'date',
                'nationId'])
            .then(([circuit]) => {
                res.status(circuit ? 200 : 404).json(circuit);
            })
            .catch(next);
    },
    delete: (req, res, next) => {
        knex('circuits')
            .where('id', req.params.id)
            .del()
            .then((result) => {
                res.status(result ? 204 : 404).json();
            })
            .catch(next);
    }
};

module.exports = circuits;