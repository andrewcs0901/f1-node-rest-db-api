const routes = require('express').Router();

const nations = require('../controllers/nations');
const teams = require('../controllers/teams');
const drivers = require('../controllers/drivers');
const circuits = require('../controllers/circuits');

/**
 * @swagger
 * tags:
 *   name: Nations
 *   description: API endpoints for managing nations
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Nation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *       required:
 *         - name
 */

/**
 * @swagger
 * /nations:
 *   get:
 *     summary: Get all nations
 *     tags: [Nations]
 *     responses:
 *       200:
 *         description: Returns an array of nations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Nation'
 *   post:
 *     summary: Create a new nation
 *     tags: [Nations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nation'
 *     responses:
 *       201:
 *         description: Nation created successfully
 *         content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/Nation'
 *       400:
 *         description: Invalid request body
 */

/**
 * @swagger
 * /nations/{id}:
 *   get:
 *     summary: Get a nation by ID
 *     tags: [Nations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the nation to retrieve
 *     responses:
 *       200:
 *         description: Returns a nation object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Nation'
 *       404:
 *         description: Nation not found
 *   put:
 *     summary: Update a nation by ID
 *     tags: [Nations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the nation to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Nation'
 *     responses:
 *       200:
 *         description: Nation updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Nation not found
 *   delete:
 *     summary: Delete a nation by ID
 *     tags: [Nations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the nation to delete
 *     responses:
 *       204:
 *         description: Nation deleted successfully
 *       404:
 *         description: Nation not found
 */
routes.get('/nations', nations.index);
routes.get('/nations/:id', nations.show);
routes.post('/nations', nations.create);
routes.put('/nations/:id', nations.update);
routes.delete('/nations/:id', nations.delete);

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: API endpoints for managing teams
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         nationId:
 *           type: integer
 *       required:
 *         - name
 *         - nationId
 */

/**
 * @swagger
 * /teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       201:
 *         description: Team created successfully
 *       400:
 *         description: Invalid request body
 */

/**
 * @swagger
 * /teams/{id}:
 *   get:
 *     summary: Get a team by ID
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the team to retrieve
 *     responses:
 *       200:
 *         description: Returns a team object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *       404:
 *         description: Team not found
 *   put:
 *     summary: Update a team by ID
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the team to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       200:
 *         description: Team updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Team not found
 *   delete:
 *     summary: Delete a team by ID
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the team to delete
 *     responses:
 *       204:
 *         description: Team deleted successfully
 *       404:
 *         description: Team not found
 */
routes.get('/teams', teams.index);
routes.get('/teams/:id', teams.show);
routes.post('/teams', teams.create);
routes.put('/teams/:id', teams.update);
routes.delete('/teams/:id', teams.delete);

/**
 * @swagger
 * components:
 *   schemas:
 *     Driver:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         number:
 *           type: string
 *         teamId:
 *           type: integer
 *         nationId:
 *           type: integer
 *       required:
 *         - name
 *         - number
 *         - nationId
 */

/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: API endpoints for managing drivers
 */

/**
 * @swagger
 * /drivers:
 *   get:
 *     summary: Get all drivers
 *     tags: [Drivers]
 *     responses:
 *       200:
 *         description: Returns an array of drivers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Driver'
 *   post:
 *     summary: Create a new driver
 *     tags: [Drivers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       201:
 *         description: Driver created successfully
 *       400:
 *         description: Invalid request body
 */

/**
 * @swagger
 * /drivers/{id}:
 *   get:
 *     summary: Get a driver by ID
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the driver to retrieve
 *     responses:
 *       200:
 *         description: Returns a driver object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Driver'
 *       404:
 *         description: Driver not found
 *   put:
 *     summary: Update a driver by ID
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the driver to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Driver'
 *     responses:
 *       200:
 *         description: Driver updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Driver not found
 *   delete:
 *     summary: Delete a driver by ID
 *     tags: [Drivers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the driver to delete
 *     responses:
 *       204:
 *         description: Driver deleted successfully
 *       404:
 *         description: Driver not found
 */
routes.get('/drivers', drivers.index);
routes.post('/drivers', drivers.create);
routes.get('/drivers/:id', drivers.show);
routes.put('/drivers/:id', drivers.update);
routes.delete('/drivers/:id', drivers.delete);

/**
 * @swagger
 * components:
 *   schemas:
 *     Circuit:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         length:
 *           type: number
 *         turns:
 *           type: integer
 *         lapRecord:
 *           type: string
 *           format: time
 *         date:
 *           type: string
 *           format: date-time
 *         nationId:
 *           type: integer
 *       required:
 *         - name
 *         - length
 *         - turns
 *         - date
 *         - nationId
 */

/**
 * @swagger
 * tags:
 *   name: Circuits
 *   description: API endpoints for managing circuits
 */

/**
 * @swagger
 * /circuits:
 *   get:
 *     summary: Get all circuits
 *     tags: [Circuits]
 *     responses:
 *       200:
 *         description: Returns an array of circuits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Circuit'
 *   post:
 *     summary: Create a new circuit
 *     tags: [Circuits]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Circuit'
 *     responses:
 *       201:
 *         description: Circuit created successfully
 *       400:
 *         description: Invalid request body
 */

/**
 * @swagger
 * /circuits/{id}:
 *   get:
 *     summary: Get a circuit by ID
 *     tags: [Circuits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the circuit to retrieve
 *     responses:
 *       200:
 *         description: Returns a circuit object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Circuit'
 *       404:
 *         description: Circuit not found
 *   put:
 *     summary: Update a circuit by ID
 *     tags: [Circuits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the circuit to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Circuit'
 *     responses:
 *       200:
 *         description: Circuit updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: Circuit not found
 *   delete:
 *     summary: Delete a circuit by ID
 *     tags: [Circuits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the circuit to delete
 *     responses:
 *       204:
 *         description: Circuit deleted successfully
 *       404:
 *         description: Circuit not found
 */
routes.get('/circuits', circuits.index);
routes.get('/circuits/:id', circuits.show);
routes.post('/circuits', circuits.create);
routes.put('/circuits/:id', circuits.update);
routes.delete('/circuits/:id', circuits.delete);

module.exports = routes;