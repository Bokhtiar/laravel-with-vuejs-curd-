import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../components/admin/home.vue';
import index_category from '../components/admin/category/index.vue';
import create_category from '../components/admin/category/create.vue';
import edit_category from '../components/admin/category/edit.vue';

import list_subscriber from '../components/admin/subscriber/index.vue';
import create_subscriber from '../components/admin/subscriber/create.vue';
import edit_subscriber from '../components/admin/subscriber/edit.vue';

import add_blog from '../components/admin/blog/index.vue';


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
    {
        path : '/category/edit/:id',
        component : edit_category,
        name : 'category/edit',
    },

    {
        path : '/subscriber/list',
        component : list_subscriber,
        name : 'subscriber/list',
    },

    {
        path : '/subscriber/create',
        component : create_subscriber,
        name : 'subscriber/create',
    },

    {
        path : '/subscriber/edit/:id',
        component : edit_subscriber,
        name : 'subscriber/edit',
    },

    {
        path : '/blog/index',
        component : add_blog,
        name : 'blog/list',
    },


  ]
})




export default routes;
