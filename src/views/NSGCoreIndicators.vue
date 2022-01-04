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
  mounted() {
    const idx = 6
    window.$(".menu-item"+idx).addClass('selected').next('.menu-sub-item').slideToggle();
  }
}
</script>

<style scoped>

</style>
