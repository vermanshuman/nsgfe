<template>
     <!-- <v-app>
        <v-app-bar color="blue" app dark>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text rounded @click="logout"> Logout </v-btn>
        </v-app-bar>
    </v-app>  -->

    <div>
    <dashboard></dashboard>
     </div>
   
</template>
<script>
import dashboard from '../components/dashboard.vue';

export default{
  data(){
    return{
    };
  },
  components:{

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
