const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('knex')(require('./knexfile')[require('./configs/configs').NODE_ENV]);
const { V1_ROUTE } = require('./consts/consts');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(V1_ROUTE, require('./routes/routesV1'));

app.use('/api-docs', require('./swaggerConfig'));

app.listen(port, () => console.log(`Server running on port ${port}`));
