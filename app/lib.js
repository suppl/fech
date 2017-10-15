import 'jquery';
import 'lodash';

var DEBUG = true;
// ENABLE/DISABLE Console Logs
if (!DEBUG) {
    console.log  = function () {
    };
    console.info = function () {
    };
}