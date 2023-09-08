const { DEFAULT_ERROR_RESPONSE } = require('../consts/consts');
const knex = require('knex')(require('../knexfile')[require('../configs/configs').NODE_ENV]);

const nations = {
    index: (_req, res, next) =>
        knex('nations')
            .then(nations => res.json(nations))
            .catch(next),
    show: (req, res, next) =>
        knex('nations').where('id', req.params.id)
            .then(([nation]) => res.status(nation ? 200 : 404).json(nation))
            .catch(next),
    create: async (req, res) => {
        try {
            const newNation = { name: req.body.name };
            const result = await knex('nations').insert(newNation, ['id', 'name']);
            res.json(result);
        } catch (error) {
            res.status(500).json({ ...DEFAULT_ERROR_RESPONSE, cause: error.message });
        }
    },
    update: (req, res, next) => {
        const updatedNation = { name: req.body.name };
        knex('nations').where('id', req.params.id).update(updatedNation, ['id', 'name'])
            .then(([result]) => res.status(result ? 200 : 404).json(result))
            .catch(next)
    },
    delete: (req, res, next) =>
        knex('nations').where('id', req.params.id).del()
            .then(result => res.status(result ? 204 : 404).json())
            .catch(next)
}
module.exports = nations;