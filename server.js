require('dotenv').config();


const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', require('./routes/routesV1'));

app.listen(port, () => console.log(`Server running on port ${port}`));
