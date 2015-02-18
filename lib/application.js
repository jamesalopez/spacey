/*
 *
 * Modules 
 *
*/

var express = require('express'),
	expressapp = express(),
	adminroutes = require('./adminroutes')(expressapp);


/**
 * Export
 */

var app = exports = module.exports = {};

exports.express = expressapp;


/*
 *
 * Set Template Engine 
 *
*/

expressapp.set('view engine', 'jade');


/*
 *
 * Set Admin Public Directory 
 *
*/
expressapp.use(express.static(__dirname + '/admin/public'));


/*
 *
 * Set Templates Directory 
 *
*/

expressapp.set('views', __dirname);

/*
 *
 * Set Theme Directory 
 * 		- relative to admin templates directory
*/

expressapp.set('adminDir', '../admin');

/*
 *
 * Set Theme Directory 
 * 		- relative to admin templates directory
*/

expressapp.set('themeDir', '../../../themes/');

/*
 *
 * Set Theme  
 * !! needs to be saved in database
 *
*/

expressapp.set('theme', 'elsol');


/**
 * Start CMS.
 *
 * @return {express.Server}
 * @api public
 */

app.start = function(){
	return expressapp.listen(process.env.PORT || '9090');
};