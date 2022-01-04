<template>
  <div class="home" style="background: #f3f4f4 !important;">
    <sidebar :topBar="true" ></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>

import sidebar from "../components/sidebar";

export default {
  name: 'DefaultContainer',
  components: {
    sidebar,
  },
  data () {

  },
  computed: {

  },
  created() {
    console.log('this.$route.name', this.$route.name)
    if(this.$route.name === 'category') {
      localStorage.setItem('categoryIsFirstRouteOnReload', 'true')
    } else if(this.$route.name === 'nsg-core-indicators') {
      localStorage.setItem('nsgCoreIndicatorsIsFirstRouteOnReload', 'true')
    }
  }
}
</script>
