<template>
  <div>
<!--    <sidebar :topBar="true" ></sidebar>-->
    <dashboard></dashboard>
  </div>
</template>

<script>
import dashboard from "../components/dashboard";

export default {
  name: "NSGCoreIndicators",
  data(){
    return{
    };
  },
  components:{
    dashboard
  },
}
</script>

<style scoped>

</style>
