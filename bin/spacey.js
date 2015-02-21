#!/usr/bin/env node

var spacey = require('./../index');
var argv = require('minimist')(process.argv.slice(2));

var options = {
  port: argv.port || process.env.PORT || 9090
};


// check if any arguments given
if(argv._.length){
	
	if( argv._[0] == 'bundle'){
		console.log('bundling spacey application...')
	}
}

else {


	console.log('Starting Server...');

	/**
	 * In Development Mode
	 */

	spacey.start(options.port);

	console.log('Running at http://localhost:' + options.port);
}