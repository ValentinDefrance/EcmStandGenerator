var express = require('express')
var app = express()

var morgan = require('morgan')
const logger = require('./logger')
const app = require('./app');

config = {
    baseUrl: "localhost",
    port: 3000
}


app.listen(3000, () => {
    logger.info('server is running at: ' + 'http://' + config.baseUrl + ':' + config.port);
});