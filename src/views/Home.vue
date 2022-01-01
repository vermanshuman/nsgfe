<template>
  <div class="main-content">
    <div class="clearfix"></div>
    <section class="mx-4 mt-5">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-2 card-mb">
          <div class="img-a dashboard-box-widget" @click="redirectToPath('/category/CONFIGURAZIONI')">
            CONFIGURAZIONI
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb">
          <div class="img-b dashboard-box-widget" @click="redirectToPath('/nsg-core-indicators')">
            NSG – INDICATORI CORE
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb">
          <div class="img-c dashboard-box-widget" @click="redirectToPath('/management-area')">
            AREA GESTIONALE – DCA 67/2019
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb" @click="redirectToPath('/pharmacy-area')">
          <div class="img-a  dashboard-box-widget">
            AREA FARMACIA
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb" @click="redirectToPath('/pne')">
          <div class="img-c dashboard-box-widget">
            PNE
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb" @click="redirectToPath('/prevention')">
          <div class="img-a dashboard-box-widget">
            PREVENZIONE
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb" @click="redirectToPath('/status-of-payment')">
          <div class="img-b dashboard-box-widget">
            STATO DEI PAGAMENTI
          </div>
        </div>

        <div class="col-lg-3 col-md-4 col-sm-2 card-mb" @click="redirectToPath('/staff')">
          <div class="img-c dashboard-box-widget">
            PERSONALE
          </div>
        </div>

      </div>
    </section>
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
  border-radius: 10px;
  transform: scale(1.019, 1.5);
  padding: 25px;
  height: 100%;
  min-height: 100px;
  font-weight: bolder;
  font-size: 22px;
  overflow: hidden;
  cursor: pointer;
  text-shadow: 2px 2px lightgray;
  display: flex;
  align-items: center;
}

.card-mb {
  margin-bottom: 60px;
}

.img-a {
  background-image: url('../assets/image/prevenzione.png');
  background-repeat: no-repeat;
  background-size: auto;
}

.img-b {
  background-image: url('../assets/image/contesto_ed_equita.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: -156px;
  background-position-x: -56px;
}

.img-c {
  background-image: url('../assets/image/assistenza-ospedaliera.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: -156px;
  background-position-x: -56px;
}
</style>
