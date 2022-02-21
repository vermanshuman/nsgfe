<template>
  <div class="main-content">
    <div class="container">
      <div class="mx-4 dashboard-page-mt">
        <div class="row">
          <div class="col-sm-12 col-md-6 card-mb">
            <div class="dashboard-box-widget configurazioni" @click="redirectToPath('/category/CONFIGURAZIONI')">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-configurazione.png')" /></div>
              <div class="text-block">CONFIGURAZIONI</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb">
            <div class="dashboard-box-widget nsg-indicatori-core" @click="redirectToPath('/nsg-core-indicators')">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-nsg.png')" /></div>
              <div class="text-block">NSG – INDICATORI CORE</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb">
            <div class="dashboard-box-widget area-gestionale" @click="redirectToPath('/management-area')">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-area-gestionale.png')" /></div>
              <div class="text-block">AREA GESTIONALE – DCA 67/2019</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb" @click="redirectToPath('/pharmacy-area')">
            <div class=" dashboard-box-widget area-farmacia">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-area-farmacia.png')" /></div>
              <div class="text-block">AREA FARMACIA</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb" @click="redirectToPath('/pne')">
            <div class="dashboard-box-widget pne">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-pne.png')" /></div>
              <div class="text-block">PNE</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb" @click="redirectToPath('/prevention')">
            <div class="dashboard-box-widget prevenzione">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-prevenzione.png')" /></div>
              <div class="text-block">PREVENZIONE</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb" @click="redirectToPath('/status-of-payment')">
            <div class="dashboard-box-widget stato-dei-pagamenti">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-pagamenti.png')" /></div>
              <div class="text-block">STATO DEI PAGAMENTI</div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 card-mb" @click="redirectToPath('/staff')">
            <div class="dashboard-box-widget persoale">
              <div class="icon-block"><v-img :src="require('../assets/image/dash-personale.png')" /></div>
              <div class="text-block">PERSONALE</div>
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
  font-weight: bolder;
  font-size: 22px;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 2px 2px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #C4C5C5;
}

.dashboard-page-mt {
  margin-top: 20px;
}
</style>
