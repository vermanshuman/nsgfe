import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import NSGCoreIndicators from "./views/NSGCoreIndicators";
import Category from "./components/Category";
import DefaultContainer from "./containers/DefaultContainer";


Vue.use(Router);
function guardCommanroute(to, from, next)
{
  var isAuthenticated = false;
  //this is just an example. You will have to find a better or 
  // centralised way to handle you localstorage data handling 
  var token = localStorage.getItem('token');
  if(token){
    isAuthenticated = true;    
  }
  if(isAuthenticated) {
    next(); // allow to enter route
  }else{
    next('/'); // go to 'login';
  }
}
export default new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes:[
        {
            path:"/",
            name:"login",
            component:Login
        },
        {
            path:"/",
            name:'home',
            redirect: '/home',
            component:DefaultContainer,
            beforeEnter : guardCommanroute,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: Home
                },
                {
                    path:'/category/:category',
                    name:'category',
                    component:Category
                },
                {
                    path:"/nsg-core-indicators",
                    name:'nsg-core-indicators',
                    component:NSGCoreIndicators,
                }
            ]
        },

    ]
})
