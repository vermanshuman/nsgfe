<template>
  <div class="main-content">
    <div class="container">
      <div class="mx-4 dashboard-page-mt">
        <div class="row">
          <div class="col-6 card-mb">
            <div class="dashboard-box-widget" @click="redirectToPath('/category/CONFIGURAZIONI')">
              CONFIGURAZIONI
            </div>
          </div>

          <div class="col-6 card-mb">
            <div class="dashboard-box-widget" @click="redirectToPath('/nsg-core-indicators')">
              NSG – INDICATORI CORE
            </div>
          </div>

          <div class="col-6 card-mb">
            <div class="dashboard-box-widget" @click="redirectToPath('/management-area')">
              AREA GESTIONALE – DCA 67/2019
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/pharmacy-area')">
            <div class=" dashboard-box-widget">
              AREA FARMACIA
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/pne')">
            <div class="dashboard-box-widget">
              PNE
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/prevention')">
            <div class="dashboard-box-widget">
              PREVENZIONE
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/status-of-payment')">
            <div class="dashboard-box-widget">
              STATO DEI PAGAMENTI
            </div>
          </div>

          <div class="col-6 card-mb" @click="redirectToPath('/staff')">
            <div class="dashboard-box-widget">
              PERSONALE
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
  justify-content: center;

  background: linear-gradient(to bottom, #27b3b8 0%, #f3f4f4 100%);
  border: 1px solid #27b3b8 ;
}

.dashboard-page-mt {
  margin-top: 48px;
}

.card-mb {
  margin-bottom: 48px;
}
</style>
