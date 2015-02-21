(function(window){

    'use strict';

    /*
    *
    * Global Spacey Object
    *
    */

    window.Spacey = window.Spacey || {};

    /*
    *
    * Session adapter for client side code
    *
    */
    Spacey.Session = function(variable_name, variable_value) {
        if(variable_value){ // set value
            return console.log(variable_name, variable_value);
        }
        else if(variable_name){ // get value
            return console.log(variable_name);
        }
    };

})(window)