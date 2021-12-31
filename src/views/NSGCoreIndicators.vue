<template>
  <div class="home" style="background: #f3f4f4 !important;">
    <sidebar :topBar="true" ></sidebar>
    <dashboard></dashboard>
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
import dashboard from "../components/dashboard";

export default {
  name: "NSGCoreIndicators",
  data(){
    return{
    };
  },
  components:{
    sidebar,
    dashboard
  },
}
</script>

<style scoped>

</style>
