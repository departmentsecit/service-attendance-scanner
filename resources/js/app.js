
require('./bootstrap');

window.Vue = require('vue');


/****************************************************************
 * For Vue-Router Plugin
 * https://router.vuejs.org/installation.html#direct-download-cdn
 */
// initialize vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { routes } from './routes';

const router = new VueRouter({
    routes
})


/***************************************
 * For vForm Plugin
 * https://github.com/cretueusebiu/vform
 */

import { 
    Form,
    HasError,
    AlertError,
    AlertErrors, 
    AlertSuccess
} from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)

window.Form =  Form;


/***********************************************************
 * For SweetALert2 Plugin (this plugin comes with AdminLTE3)
 * https://sweetalert2.github.io/
 */
import Swal from 'sweetalert2';
window.Swal = Swal;

// toast : It's an pop-up alert at the top-right of the screen
window.toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

/***********************************************************
 * Set Vue Filters Here..
 */
// this format the Date
import moment from 'moment'
Vue.filter('formatDate', function(value,formatType) {
        formatType = (formatType == null ? 'MMM DD, YYYY' : formatType);
        return moment(String(value)).format(formatType);
})

/***********************************************************
 * Other userfull JS Initialization
 */
// Add prototype for Date format to add days
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

/*****************************
 * Initialize new Vue instance
 */
const app = new Vue({
    el: '#app',
    router
});
