import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../components/admin/home.vue';
import index_category from '../components/admin/category/index.vue';
import create_category from '../components/admin/category/create.vue';

const routes =  new VueRouter({
    mode: 'history',
    routes :[
    {
      path : '/',
      component : home,
      name : 'home',
    },
    {
        path : '/category/list',
        component : index_category,
        name : 'category/list',
    },
    {
        path : '/category/create',
        component : create_category,
        name : 'category/create',
    },

  ]
})




export default routes;
