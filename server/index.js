const express = require('express');
const PORT = require('./config/app').PORT;
const sequelize = require('./config/db');
const models = require('./models/models');
const app = express();
const router = require('./routes');
const errorHandling = require('./middleware/ApiErrorMiddleware');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');


app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/app', router)


app.use(errorHandling)

const start  = async () => {

    try {
        await sequelize.authenticate()
        .then(console.log('No problem with authenticate'));
        
        app.listen(PORT, () => {
            console.log('I listen 5454 port');
        })

      } catch (error) {
        console.error('Unable to connect to the database:', error);
  }     
}

start();