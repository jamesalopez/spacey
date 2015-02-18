/*
 *
 * Modules 
 *
*/

var express = require('express'),
	expressapp = express();


/**
 * Application prototype.
 */

var app = exports = module.exports = {};


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

expressapp.set('views', './admin/templates');


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