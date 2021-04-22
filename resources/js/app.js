import Vue from 'vue'
import routes from './router/index'
require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('app-nav', require('./components/navbar.vue').default);


const app = new Vue({
    el: '#app',
    router:routes,
});
