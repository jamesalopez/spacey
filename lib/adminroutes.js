var serveIndex = require('serve-index');


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

    app.get('/', function(req, res){
        res.render( 'pages/index', { title: 'Hey', message: 'Admin Route!'});
    });
};