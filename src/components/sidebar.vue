<template>
  <div>
    <nav class="menu-sidebar">
      <span class="menu-bars-close"><i class="fa fa-times"></i></span>
      <div class="brand-logo text-center mt-3">
        <router-link to="/home">
          <img src="../assets/image/logo-NSG.png" id="logo" alt="NSG Logo" />
        </router-link>
      </div>
      <div class="mt-4 menu-btm" style="margin-bottom: 73px;">
        <div class="main-parent menu-item menu-item1 mt-4 mb-1 shadow" id="5">
          <div class="menu-item-text" @click="redirectToHome('CONFIGURAZIONI')">
            <div style="margin-top: 14px;">configurazioni</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/setting.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="first-child menu-sub-item menu-sub-item1 shadow">
          <ul>
            <li class="ssubmenu">
              <router-link class="first-child-item menu-item ssubmenu-main" to="/category/CUP%2FAmbulatorio%20">CUP/Ambulatorio</router-link>
              <div class="first-child-sub-item menu-sub-item menu-sub-item1 shadow cpu-ambulance ssubmenu-container">
                <div class="popup-tip-container"><div class="popup-tip"></div></div>
                <ul>
                  <li>
                    <router-link class="ssubmenu-item" to="/category/PRESTAZIONI SENTINELLA PERFORMANCE">PRESTAZIONI SENTINELLA PERFORMANCE</router-link>
                  </li>
                  <li>
                    <router-link class="ssubmenu-item" to="/category/SETTIMANE INDICE">SETTIMANE INDICE</router-link>
                  </li>
                  <li>
                    <router-link class="ssubmenu-item" to="/category/PRESTAZIONI CALCOLO INDICI">PRESTAZIONI CALCOLO INDICI</router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="main-parent menu-item menu-item6 mt-4 mb-1 shadow test" id="6">
          <div class="menu-item-text" @click="redirectToPath('nsg-core-indicators')">
            <div style="margin-top: 14px;">NSG – INDICATORI CORE</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>
        <!--  removed class from menu-sub-item6-->
        <div class="first-child menu-sub-item  shadow">

          <div class="first-child-item menu-item menu-item2 mt-1 mb-1 shadow" id="1">
            <div class="menu-item-text" @click="redirectToHome('PREVENZIONE COLLETTIVA')" style="height: 55px">
              <div style="margin-top: 0px;">prevenzione</div>
              <div style="margin-top: -8px;">collettiva e sanità</div>
              <div style="margin-top: -8px;">pubblica</div>
            </div>
            <div class="menu-item-icon">
              <img src="../assets/image/1.png" alt="" />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="first-child-sub-item menu-sub-item menu-sub-item2 shadow">
            <ul>
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
          </div>

          <div class="first-child-item menu-item menu-item3 mt-4 mb-1 shadow" id="2">
            <div class="menu-item-text" @click="redirectToHome('AREA DISTRETTUALE')">
              <div style="margin-top: 5px;">area</div>
              <div style="margin-top: -8px;">distrettuale</div>
            </div>
            <div class="menu-item-icon">
              <img src="../assets/image/2.png" alt="" />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="first-child-sub-item menu-sub-item menu-sub-item3 shadow">
            <ul>
              <li @click="routeTo('/category/SIO, Anagrafe tributaria')">
                <router-link to="#">SIO, Anagrafe tributaria</router-link>
              </li>
              <li>
                <router-link to="/category/Sistema ADT">Sistema ADT</router-link>
              </li>
              <li>
                <router-link to="/category/Pronto soccorso">Pronto soccorso</router-link>
              </li>
              <li class="ssubmenu">
                <router-link class="menu-item ssubmenu-main" to="/category/CUP%2FAmbulatorio">CUP/Ambulatorio</router-link>

                <div class="menu-sub-item menu-sub-item3 shadow cpu-ambulance ssubmenu-container">
                  <div class="popup-tip-container"><div class="popup-tip"></div></div>
                  <ul>
                    <li>
                      <router-link class="ssubmenu-item" to="/category/PERFORMANCE EX ANTE">PERFORMANCE EX ANTE</router-link>
                    </li>
                    <li>
                      <router-link class="ssubmenu-item" to="/category/PERFORMANCE EX POST">PERFORMANCE EX POST</router-link>
                    </li>
                    <li>
                      <router-link class="ssubmenu-item" to="/category/PERFORMANCE SETTIMANE INDICE">PERFORMANCE SETTIMANE INDICE</router-link>
                    </li>
                  </ul>
                </div>
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
          </div>

          <div class="first-child-item menu-item menu-item4 mt-4 mb-1 shadow" id="3">
            <div class="menu-item-text" @click="redirectToHome('CONESTO ED EQUITA')">
              <div style="margin-top: 5px;">contesto</div>
              <div style="margin-top: -8px;">ed equita</div>
            </div>
            <div class="menu-item-icon">
              <img src="../assets/image/3.png" alt="" />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="first-child-sub-item menu-sub-item menu-sub-item4 shadow">
            <ul>
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
          </div>

          <div class="first-child-item menu-item menu-item5 mt-4 mb-1 shadow" id="4">
            <div class="menu-item-text" @click="redirectToHome('ASSISTENZA OSPEDALIERA')">
              <div style="margin-top: 5px;">assistenza</div>
              <div style="margin-top: -8px;">ospedaliera</div>
            </div>
            <div class="menu-item-icon">
              <img src="../assets/image/4.png" alt="" />
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="first-child-sub-item menu-sub-item menu-sub-item5 shadow">
            <ul>
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
              <li>
                <router-link to="/category/SIO">SIO</router-link>
              </li>
              <li>
                <router-link to="/category/CEDAP">CEDAP</router-link>
              </li>
            </ul>
          </div>

        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="7">
          <div class="menu-item-text" @click="redirectToPath('management-area')">
            <div style="margin-top: 5px;">AREA GESTIONALE – DCA</div>
            <div style="margin-top: -8px;">67/2019</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="8">
          <div class="menu-item-text" @click="redirectToPath('pharmacy-area')">
            <div style="margin-top: 14px;">AREA FARMACIA</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="9">
          <div class="menu-item-text" @click="redirectToPath('pne')">
            <div style="margin-top: 14px;">PNE</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="10">
          <div class="menu-item-text" @click="redirectToPath('prevention')">
            <div style="margin-top: 14px;">PREVENZIONE</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="11">
          <div class="menu-item-text" @click="redirectToPath('status-of-payment')">
            <div style="margin-top: 14px;">STATO DEI PAGAMENTI</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="menu-item menu-item6 mt-4 mb-1 shadow" id="12">
          <div class="menu-item-text" @click="redirectToPath('staff')">
            <div style="margin-top: 14px;">PERSONALE</div>
          </div>
          <div class="menu-item-icon">
            <img src="../assets/image/3.png" alt="" />
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </nav>
    <div class="main-content" style="height: auto;display: none;" :class="{show: topBar}">
      <section class="row topbar">
        <div class="col-lg-4 col-8">
          <span class="menu-bars-open"><i class="fa fa-bars"></i></span>
          <div class="search-textbox">
            <span class="search-icon"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control" placeholder="">
            <span class="topbar-mail">
                            <img src="../assets/image/mail.png" alt="mail" />
                            <div class="mail-active shadow"></div>
                        </span>
          </div>
        </div>
        <div class="col-lg-8 col-4 ">
          <v-app class="logout" style="float: right;background-color: transparent;">
            <v-btn text rounded @click="logout" style="background-color: #fff;"> Logout </v-btn>
          </v-app>
        </div>
      </section>
    </div>
  </div>
</template>
<script>

export default{
  props: ['topBar'],
  mounted () {
    window.$(".main-parent").click(function(){
      let selected = window.$(this).attr('id');
      if(window.$(this).hasClass('selected')) {
        window.$(this).removeClass('selected');
      } else {
        if(window.$(this).next('.first-child.menu-sub-item').length>0) {
          window.$(this).addClass('selected');
        }
      }
      window.$(".main-parent.selected").each(function() {
        var prevSelected = window.$(this).attr('id');
        if(selected!=undefined && selected != prevSelected) {
          window.$(this).next('.first-child.menu-sub-item').slideToggle();
          window.$(this).removeClass('selected');
        }
      });
      window.$(this).next('.first-child.menu-sub-item').slideToggle();
    });


    window.$(".menu-item.first-child-item").click(function(){
      let selected1 = window.$(this).attr('id');
      if(window.$(this).hasClass('selected')) {
        window.$(this).removeClass('selected');
      } else {
        if(window.$(this).next('.menu-sub-item').length>0) {
          window.$(this).addClass('selected');
        }
      }
      window.$(".menu-item.first-child-item.selected").each(function() {
        let prevSelected1 = window.$(this).attr('id');
        if(selected1!=undefined && selected1 != prevSelected1) {
          window.$(this).next('.menu-sub-item.first-child-sub-item').slideToggle();
          window.$(this).removeClass('selected');
        }
      });
      window.$(this).next('.menu-sub-item.first-child-sub-item').slideToggle();
    });
    window.$(".menu-item").click(function(){
      if(window.$('.ssubmenu-main').hasClass('selected')){
        window.$('.ssubmenu').css({'margin-top': '5px'});
        window.$('.ssubmenu-main').css({'background': '#578284 !important', 'border-radius': '10px', 'padding': '10px 10px', 'margin-left': '-6px','display': 'block', 'color': '#fff !important'});
      }else{
         window.$('.ssubmenu').css({'background': 'none','border-radius': '0px','margin-top': '0px'});
         window.$('.ssubmenu-main').css({'background': 'none', 'border-radius': '0px', 'padding': '0px', 'margin-left': '0px','display': 'block', 'color': '#000'});
      }
    });
    
    window.$(".menu-bars-open").click(function(){
      window.$(".menu-sidebar").css({left: "0px"});
    });
    window.$(".menu-bars-close").click(function(){
      window.$(".menu-sidebar").css({left: "-300px"});
    });
  },
  methods: {
    logout(){
      localStorage.removeItem('token');
      this.$router.push({ name: 'login' });
    },
    routeTo (path) {
      if (this.$route.path === path) this.$router.go();
      else this.$router.push(path)
      return;
    },
    redirectToHome (categoryName) {
      this.$router.push(
          {
            path: '/category/' + categoryName,
          }
      )
    },
    redirectToPath(path) {
      this.$router.push({ name: path });
    }
  },

}
window.$(document).mouseup(function(e) 
{
    var container = window.$('.ssubmenu-container');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});
</script>
