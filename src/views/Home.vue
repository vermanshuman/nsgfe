<template>
  <div class="main-content">
    <div class="container">
      <div class="mx-4 dashboard-page-mt">
        <div class="row">
          <div class="col-6 card-mb">
            <div class="dashboard-box-widget configurazioni" @click="redirectToPath('/category/CONFIGURAZIONI')">
              <v-img :src="require('../assets/image/dash-configurazione.png')" /> CONFIGURAZIONI
            </div>
          </div>

          <div class="col-6 card-mb">
            <div class="dashboard-box-widget nsg-indicatori-core" @click="redirectToPath('/nsg-core-indicators')">
              <v-img :src="require('../assets/image/dash-nsg.png')" /> NSG – INDICATORI CORE
            </div>
          </div>

          <div class="col-6 card-mb">
            <div class="dashboard-box-widget area-gestionale" @click="redirectToPath('/management-area')">
              <v-img :src="require('../assets/image/dash-area-gestionale.png')" /> AREA GESTIONALE – DCA 67/2019
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/pharmacy-area')">
            <div class=" dashboard-box-widget area-farmacia">
              <v-img :src="require('../assets/image/dash-area-farmacia.png')" /> AREA FARMACIA
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/pne')">
            <div class="dashboard-box-widget pne">
              <v-img :src="require('../assets/image/dash-pne.png')" /> PNE
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/prevention')">
            <div class="dashboard-box-widget prevenzione">
              <v-img :src="require('../assets/image/dash-prevenzione.png')" /> PREVENZIONE
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/status-of-payment')">
            <div class="dashboard-box-widget stato-dei-pagamenti">
              <v-img :src="require('../assets/image/dash-pagamenti.png')" /> STATO DEI PAGAMENTI
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/staff')">
            <div class="dashboard-box-widget persoale">
              <v-img :src="require('../assets/image/dash-personale.png')" /> PERSONALE
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push({name: 'login'});
    },
    redirectToPath(path) {
      this.$router.push(path);
    }
  },
}
</script>
<style lang="scss" scoped>
.dashboard-box-widget {
  background-size: cover;
  border-radius: 15px;
  padding: 25px;
  height: 100%;
  min-height: 155px;
  font-weight: bolder;
  font-size: 22px;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 2px 2px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, #27b3b8 0%, #f3f4f4 100%);
  border: 2px solid #27b3b8 ;
}

.dashboard-page-mt {
  margin-top: 48px;
}
</style>
