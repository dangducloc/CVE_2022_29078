//Routers are here

const  express = require('express');
const path = require('path');
const routers = express.Router();
const controllers = require('../controllers/controllers');
routers.use("/assets",express.static(path.join(__dirname, '../assets')));

routers.get('/', controllers.home);

module.exports = routers;