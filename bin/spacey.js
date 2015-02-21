#!/usr/bin/env node

var spacey = require('./../index');

/**
 * Start Spacey Application
 */
spacey.express.get('/', function(req, res){
    res.render( 'index', { title: 'Hey', message: 'Theme Index!'});
});


/**
 * Start Spacey Application
 */

spacey.start();