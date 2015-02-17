/*
 *
 * Modules 
 *
*/

var express = require('express'),
	eapp = express(),
	io = require('socket.io');


/**
 * Application prototype.
 */

var app = exports = module.exports = {};

/*
 *
 * Set Template Engine 
 *
*/

eapp.set('view engine', 'jade');


/*
 *
 * Set Admin Public Directory 
 *
*/
eapp.use(express.static(__dirname + '/admin/public'));


/*
 *
 * Set Templates Directory 
 *
*/

eapp.set('views', './admin/templates');


/*
 *
 * Set Theme Directory 
 * 		- relative to admin templates directory
*/

eapp.set('themeDir', '../../../themes/');

/*
 *
 * Set Theme  
 * !! needs to be saved in database
 *
*/

eapp.set('theme', 'elsol');


/**
 * Start CMS.
 *
 * @return {express.Server}
 * @api public
 */

app.start = function(){
  return expressapp.listen(process.env.PORT || this || '3000');
};
