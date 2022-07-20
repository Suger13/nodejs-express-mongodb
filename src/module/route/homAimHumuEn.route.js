const express = require('express')
const route = express.Router();
const homAimHumuEnController = require('../controller/homAimHumuEnController.js');

route.get('/', homAimHumuEnController.getData);