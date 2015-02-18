/*
 *
 * Admin Routes
 *
*/

exports = module.exports = function(app){

	/*
	 *
	 * Admin Index Response
	 *
	*/

	app.get('/admin', function(req, res){
	    res.render( app.settings.adminDir + '/pages/index', { title: 'Hey', message: 'Admin Route!'});
	});

};