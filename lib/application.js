/*
 *
 * Modules 
 *
*/

var express = require('express'),
    site = express(),
    admin = express(),
    sassMiddleware = require('node-sass-middleware'),
    adminroutes = require('./adminroutes');


/**
 * Export
 */

var app = exports = module.exports = {};

exports.express = site;



/*
 *
 * Set Template Engine 
 *
*/
site.set('view engine', 'jade');
admin.set('view engine', 'jade');

/*
 *
 * Set Templates Directory 
 *
*/

site.set('views', process.cwd() + '/themes/elsol/');
admin.set('views', __dirname + '../../admin/templates');


/*
 *
 * Build Sass under public directory
 *
*/

admin.use( sassMiddleware({
    src: __dirname + '../../admin/public/sass',
    dest: __dirname + '../../admin/public/styles',
    prefix:  '/styles', // skip need to have styles folder
    outputStyle: 'compressed' //'compressed'
}));

site.use( sassMiddleware({
    src: process.cwd() + '/themes/elsol/public/sass',
    dest: process.cwd() + '/themes/elsol/public/styles',
    prefix:  '/styles', // skip need to have styles folder
    outputStyle: 'compressed' //'compressed'
}));


/*
 *
 * Set Public (static) directories 
 *
*/

site.use(express.static(process.cwd() + '/themes/elsol/public'));
admin.use(express.static(__dirname + '../../admin/public'));


/*
 *
 * Set Theme  
 * !! needs to be saved in database
 *
*/

site.set('theme', 'elsol');



/*
 *
 * Inject spacey scripts
 *
*/
site.use(require('connect-inject')(
    {
        snippet: "<script src='/admin/client/js/spacey.js'></script>",
        ignore : [],
        rules: [{ // before head tag
            match: /<\/head>/,
            fn: function(w, s){
                return s + w;
            }
        }],
    }
));



/**
 * Start CMS.
 *
 * @return {express.Server}
 * @api public
 */

app.start = function(port){
    return site.listen(port);
};


site.use('/admin', admin);


/**
 * Start Admin Routes.
 */

adminroutes(admin);

