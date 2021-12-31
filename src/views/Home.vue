<template>
     <!-- <v-app>
        <v-app-bar color="blue" app dark>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text rounded @click="logout"> Logout </v-btn>
        </v-app-bar>
    </v-app>  -->

    <div class="home" style="background: #f3f4f4 !important;">
    <sidebar :topBar="true" ></sidebar>
    <dashboard></dashboard>
     </div>
   
</template>
<script>
import dashboard from '../components/dashboard.vue';
import sidebar from '../components/sidebar';
export default{
  data(){
    return{
    };
  },
  components:{
    sidebar,
    dashboard
  },
  methods: {
    logout(){
        localStorage.removeItem('token');
        this.$router.push({ name: 'login' });
    }
  },
}
</script>
