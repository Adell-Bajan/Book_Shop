const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config')


// Initialize app
const app = express()

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


// routes
const Authentication = require('./routes/Authentication.routes');
app.use('/', Authentication);



sequelize.sync({ force: true })
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })