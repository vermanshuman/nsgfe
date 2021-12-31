<template>
  <div class="main-content">
    <section class="category">
      <div class="container">
        <img src="../assets/image/icon-prevenzione.png" style="width: 120px;position: absolute;top: 163px;margin-left: 2px;z-index: 100;" class="item-left-logo" alt="" />
        <div class="items row mt-4 ml-md-4 mr-md-4 " style="overflow: hidden;border-radius: 10px;padding-left: 0px !important;margin-left: 50px !important;">
          <div class="col-12 dashboard-block-bg prevenzione">
          </div>
          <div class="item col-12" style="margin-top: -250px;">
            <div class="row">
              <div class="col-md-5 mt-4" style="margin-top: 2.5rem !important;cursor: pointer;"
                   @click="redirectToHome('PREVENZIONE COLLETTIVA')">
                <div class="item-left mt-5 mb-4" style="margin-top: 2.5rem !important;">
                  <h5 style="font-size: 1.5rem;">prevenzione <br/>collettiva <br/>e sanita pubblica</h5>
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-8 item-second-left pl-0 pr-0" style="margin-left: -20px !important;">
                    <vueScroll>
                      <ul id="prevenzione-ul" class="pt-2" style="max-height: 250px;">
                        <li>
                          <router-link to="/category/Anagrafe Vaccinale">Anagrafe Vaccinale</router-link>
                        </li>
                        <li>
                          <router-link to="/category/INAIL, ISTAT e INPS">INAIL, ISTAT e INPS</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Piano Regionale per la Prevenzione">Piano Regionale per la Prevenzione</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Piattaforma VETINFO">Piattaforma VETINFO</router-link>
                        </li>
                        <li>
                          <router-link to="/category/NSIS - PNR">NSIS - PNR</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Banca dati CROGM - NSIS vigilanza alimenti">Banca dati CROGM - NSIS vigilanza alimenti</router-link>
                        </li>
                        <li>
                          <router-link to="/category/ISTAT - PASSI">ISTAT - PASSI</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Sistema Informativo screening">Sistema Informativo screening</router-link>
                        </li>
                      </ul>
                    </vueScroll>
                  </div>
                  <div class="pt-4 col-lg-3 col-4 item-second-right num-font">
                    <h1>19</h1>
                    <h3>indicatori</h3>
                  </div>
                  <div class="col-lg-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <img src="../assets/image/icon-area-distrettuale.png" style="width: 120px;position: absolute;top: 443px;margin-left: 2px;z-index: 100;" class="item-left-logo" alt="" />
        <div class="items row mt-4 ml-md-4 mr-md-4 " style="overflow: hidden;border-radius: 10px;padding-left: 0px !important;margin-left: 50px !important;">
          <div class="col-12 dashboard-block-bg area-distrettuale">
          </div>
          <div class="item col-12" style="margin-top: -250px;">
            <div class="row">
              <div class="col-md-5 mt-4" style="margin-top: 2.5rem !important;cursor: pointer;"
                   @click="redirectToHome('AREA DISTRETTUALE')">
                <div class="item-left mt-5 mb-4" style="margin-top: 3.1rem !important;">
                  <h5 style="font-size: 1.5rem;">area <br/>distrettuale</h5>
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-8 item-second-left pl-0 pr-0" style="margin-left: -20px !important;">
                    <vueScroll>
                      <ul id="area-distrettuale-ul" class="pt-2" style="max-height: 250px;">
                        <li>
                          <router-link to="/category/SIO, Anagrafe tributaria">SIO, Anagrafe tributaria</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Sistema ADT">Sistema ADT</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Pronto soccorso">Pronto soccorso</router-link>
                        </li>
                        <li>
                          <router-link to="/category/CUP%2FAmbulatorio">CUP/Ambulatorio</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Farmacia">Farmacia</router-link>
                        </li>
                        <li>
                          <router-link to="/category/CEDAP">CEDAP</router-link>
                        </li>
                        <li>
                          <router-link to="/category/SIAD">SIAD</router-link>
                        </li>
                        <li>
                          <router-link to="/category/ISTAT - Modello D12">ISTAT - Modello D12</router-link>
                        </li>
                        <li>
                          <router-link to="/category/ADT, Flussi SDO">ADT, Flussi SDO</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Hospice">Hospice</router-link>
                        </li>
                      </ul>
                    </vueScroll>
                  </div>
                  <div class="pt-4 col-lg-3 col-4 item-second-right num-font" style="background-color: rgb(205,70,198,0.6);">
                    <h1>38</h1>
                    <h3>indicatori</h3>
                  </div>
                  <div class="col-lg-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <img src="../assets/image/icon_contesto_ed_equita.png" style="width: 120px;position: absolute;top: 722px;margin-left: 2px;z-index: 100;" class="item-left-logo" alt="" />
        <div class="items row mt-4 ml-md-4 mr-md-4 " style="overflow: hidden;border-radius: 10px;padding-left: 0px !important;margin-left: 50px !important;">
          <div class="col-12 dashboard-block-bg contesto-ed-equita">
          </div>
          <div class="item col-12" style="margin-top: -250px;cursor: pointer;"
               @click="redirectToHome('CONESTO ED EQUITA')">
            <div class="row">
              <div class="col-md-5 mt-4" style="margin-top: 2.5rem !important;">
                <div class="item-left mt-5 mb-4" style="margin-top: 3.1rem !important;">
                  <h5 style="font-size: 1.5rem;">contesto ed <br/>equità</h5>
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-8 item-second-left pl-0 pr-0" style="margin-left: -20px !important;">
                    <vueScroll>
                      <ul id="contesto-ed-equita-ul" class="pt-2" style="max-height: 250px;">
                        <li>
                          <router-link to="/category/Indagine ISTAT">Indagine ISTAT</router-link>
                        </li>
                        <li>
                          <router-link to="/category/OKkio alla SALUTE">OKkio alla SALUTE</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Passi d’Argento (PdA)">Passi d’Argento (PdA)</router-link>
                        </li>
                      </ul>
                    </vueScroll>
                  </div>
                  <div class="pt-4 col-lg-3 col-4 item-second-right num-font" style="background-color: rgb(254,141,6,0.5);">
                    <h1>5</h1>
                    <h3>indicatori</h3>
                  </div>
                  <div class="col-lg-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <img src="../assets/image/icon-assistenza-ospedaliera.png" style="width: 120px;position: absolute;top: 1001px;margin-left: 2px;z-index: 100;" class="item-left-logo" alt="" />
        <div class="items row mt-4 ml-md-4 mr-md-4 " style="overflow: hidden;border-radius: 10px;padding-left: 0px !important;margin-left: 50px !important;">
          <div class="col-12 dashboard-block-bg assistenza-ospedaliera">
          </div>
          <div class="item col-12" style="margin-top: -250px;margin-bottom: 115px;">
            <div class="row">
              <div class="col-md-5 mt-4" style="margin-top: 2.5rem !important;">
                <div class="item-left mt-5 mb-4" style="margin-top: 3.1rem !important;cursor: pointer;"
                     @click="redirectToHome('ASSISTENZA OSPEDALIERA')">
                  <h5 style="font-size: 1.5rem;">assistenza <br/>ospedaliera</h5>
                </div>
              </div>
              <div class="col-md-7">
                <div class="row">
                  <div class="col-8 item-second-left pl-0 pr-0" style="margin-left: -20px !important;background-color: #c00000;opacity: 0.4;">
                    <vueScroll>
                      <ul id="assistenza-ospedaliera" class="pt-2" style="max-height: 250px;">
                        <li>
                          <router-link to="/category/SDO">SDO</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Blocco Operatorio">Blocco Operatorio</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Trasfusionale">Trasfusionale</router-link>
                        </li>
                        <li>
                          <router-link to="/category/Centro Regionale Trapianti">Centro Regionale Trapianti</router-link>
                        </li>
                        <li>SIO</li>
                        <li>CEDAP</li>
                      </ul>
                    </vueScroll>
                  </div>
                  <div class="pt-4 col-lg-3 col-4 item-second-right num-font" style="background-color: rgb(0,170,246,0.6);">
                    <h1>32</h1>
                    <h3>indicatori</h3>
                  </div>
                  <div class="col-lg-1">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.__rail-is-horizontal {
  display: none;
}
.__rail-is-vertical {
  bottom: 0 !important;
}
</style>
<script>
export default{
  methods: {
    redirectToHome (categoryName) {
      this.$router.push(
          {
            path: '/category/' + categoryName,
          }
      )
    }
  }
}
</script>
