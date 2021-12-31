<template>
  <div>
    <div class="main-content" v-if="isCategoryHome(categoryName) && !showDettaglioGrid">
      <div v-for="data in getMenusData(categoryName)" v-bind:key="data">
        <div class="top-bar mx-4 mt-4">
          <b-row>
            <b-col sm="12">
              <div class="flex flex-column align-items-center">
                <span class="category-title pl-3">{{ data.subcat }}</span>
                <button @click="openDettaglio" class="btn pull-right category-button" v-if="!showDettaglioGrid"
                        :disabled="data.subcat !== 'CUP/Ambulatorio'" style="opacity: 1;">Dettaglio
                </button>
              </div>
            </b-col>
          </b-row>
        </div>

        <div class="container-fluid mx-10" v-if="hasName(data.subcat)">
          <v-row class="py-10">
            <template v-for="item in getSubMenusData(data.subcat)">
              <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;" v-bind:key="item.IndexName">
                <Card :name="item.IndexName" :noPercentage="getNoPercentage(item)" :perMille="getPerMille(item)"
                      :value="getReferenceData(item.IndexName) && getReferenceData(item.IndexName).value ? getReferenceData(item.IndexName).value : 0"
                      :period="getReferenceData(item.IndexName) ? getReferenceData(item.IndexName).reference_period : ''"
                      :year="getReferenceData(item.IndexName) ? getReferenceData(item.IndexName).reference_year : ''"
                      :desc="item.IndexDescription"/>
              </v-col>
            </template>
          </v-row>
        </div>


        <div class="container-fluid" :class="{'mx-10': !showDettaglioGrid}" v-if="data.subcat === 'CUP/Ambulatorio'">
          <v-row class="py-10" v-if="!showDettaglioGrid">
            <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
              <Card name="D10Z" :value="d10z && d10z.value ? d10z.value : 0" :period="d10z ? d10z.reference_period : ''"
                    :year="d10z ? d10z.reference_year : ''"
                    :desc="'Percentuale di prestazioni, garantite entro i tempi, della classe di priorità B in rapporto al totale di prestazioni di classe B'"/>
            </v-col>
            <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
              <Card name="D11Z" :value="d11z && d11z.value ? d11z.value : 0" :period="d11z ? do4c.reference_period : ''"
                    :year="d11z ? d11z.reference_year : ''"
                    :desc="'Percentuale di prestazioni, garantite entro i tempi, della classe di priorità D in rapporto al totale di prestazioni di classe D'"/>
            </v-col>
            <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
              <Card name="D12C" :value="d12c && d12c.value ? d12c.value : 0" :period="d12c ? d12c.reference_period : ''" :noPercentage="true"
                    :year="d12c ? d12c.reference_year : ''" :desc="'Consumo pro-capite di prestazioni di laboratorio'"/>
            </v-col>
            <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
              <Card name="D13C" :value="d13c && d13c.value ? d13c.value : 0" :period="d13c ? d13c.reference_period : ''" :perMille="true"
                    :year="d13c ? d13c.reference_year : ''"
                    :desc="'Consumo di prestazioni di RM osteoarticolari in pazienti anziani con più di 65 anni per 1000 abitanti'"/>
            </v-col>
          </v-row>
          <v-row class="py-10" v-if="showDettaglioGrid">
            <v-col cols="12">
              <Dettaglio/>
            </v-col>
          </v-row>
        </div>

      </div>
    </div><!--main-content-->

    <div class="main-content" v-if="isCategoryHome(categoryName) && showDettaglioGrid">
      <Dettaglio />
    </div>
    <div class="main-content" v-if="!isCategoryHome(categoryName)">

      <div class="top-bar mx-4 mt-4">
        <b-row>
          <b-col sm="12">
            <div class="flex flex-column align-items-center">
              <span class="category-title pl-3">{{ categoryName }}</span>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="container-fluid mx-10" v-if="hasName(categoryName)">
        <v-row class="py-10">
          <template v-for="item in getSubMenusData(categoryName)" >
            <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;" v-bind:key="item.IndexName">
              <Card :name="item.IndexName" :value="getReferenceData(item.IndexName) && getReferenceData(item.IndexName).value ? getReferenceData(item.IndexName).value : 0"
                    :period="getReferenceData(item.IndexName) ? getReferenceData(item.IndexName).reference_period : ''" :year="getReferenceData(item.IndexName) ? getReferenceData(item.IndexName).reference_year : ''" :desc="item.IndexDescription"
                    :noPercentage="getNoPercentage(item)" :perMille="getPerMille(item)" />
            </v-col>
          </template>
        </v-row>
      </div>
      <div class="container-fluid mx-10" v-if="categoryName === 'CUP/Ambulatorio'">
        <v-row class="py-10" v-if="!showDettaglioGrid">
          <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
            <Card name="D10Z" :value="d10z && d10z.value ? d10z.value : 0" :period="d10z ? d10z.reference_period : ''" :year="d10z ? d10z.reference_year : ''" :desc="'Percentuale di prestazioni, garantite entro i tempi, della classe di priorità B in rapporto al totale di prestazioni di classe B'" />
          </v-col>
          <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
            <Card name="D11Z" :value="d11z && d11z.value ? d11z.value : 0" :period="d11z ? do4c.reference_period : ''" :year="d11z ? d11z.reference_year : ''" :desc="'Percentuale di prestazioni, garantite entro i tempi, della classe di priorità D in rapporto al totale di prestazioni di classe D'" />
          </v-col>
          <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
            <Card name="D12C" :noPercentage="true" :value="d12c && d12c.value ? d12c.value : 0" :period="d12c ? d12c.reference_period : ''" :year="d12c ? d12c.reference_year : ''" :desc="'Consumo pro-capite di prestazioni di laboratorio'" />
          </v-col>
          <v-col cols="12" sm="6" md="6" xl="4" style="max-width: 375px;">
            <Card name="D13C" :perMille="true" :value="d13c && d13c.value ? d13c.value : 0" :period="d13c ? d13c.reference_period : ''" :year="d13c ? d13c.reference_year : ''" :desc="'Consumo di prestazioni di RM osteoarticolari in pazienti anziani con più di 65 anni per 1000 abitanti'" />
          </v-col>
        </v-row>
      </div>
      <div class="container-fluid" v-if="categoryName === 'PERFORMANCE EX ANTE' || categoryName === 'PERFORMANCE EX POST' || categoryName === 'PERFORMANCE SETTIMANE INDICE'">
        <v-row class="py-10" v-if="showDettaglioGrid">
          <v-col cols="12">
            <Dettaglio ref="dettaglioRef" :type="categoryName === 'PERFORMANCE SETTIMANE INDICE' ? 3 : (categoryName === 'PERFORMANCE EX POST' ? 2 : 1)" />
          </v-col>
        </v-row>
      </div>
      <Performance v-if="categoryName === 'PRESTAZIONI SENTINELLA PERFORMANCE'" />
      <Settimana v-if="categoryName === 'SETTIMANE INDICE'" />
      <Calcoloc v-if="categoryName === 'PRESTAZIONI CALCOLO INDICI'" />
    </div>
  </div>

</template>


<script>
import Card from '@/components/Card';
import Dettaglio from '@/components/Dettaglio';
import Performance from '@/components/Performance';
import Settimana from '@/components/Settimana';
import Calcoloc from '@/components/Calcoloc';
import axios from 'axios';

export default {
  name: "Category",
  data () {
    return {
      categoryOneData: [],
      showDettaglioGrid: false,
      psCategory: null
    }
  },
  components: {Card, Dettaglio, Performance, Settimana, Calcoloc},
  computed:{
    categoryName(){
      return this.$route.params.category;
    },
    do1c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D01C')
        
      }
      else return {}
    },
    do2c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D02C')
      }
      else return {}
    },
    do3c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D03C')
      }
      else return {}
    },
    do4c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D04C')
      }
      else return {}
    },
    do5c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D05C')
      }
      else return {}
    },
    do6c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D06C')
      }
      else return {}
    },
    do7ca() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D07Ca')
      }
      else return {}
    },
    do7cb() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D07Cb')
      }
      else return {}
    },
    do8c() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D08C')
      }
      else return {}
    },
    do9z() {
      if (this.categoryOneData.length) {
        return this.categoryOneData.find(data => data.index === 'D09Z')
      }
      else return {}
    },
    d10z() {
      return this.getReferenceData('D10Z');
    },
    d11z() {
      return this.getReferenceData('D11Z');
    },
    d12c() {
      return this.getReferenceData('D12C');
    },
    d13c() {
      return this.getReferenceData('D13C');
    },
    d14c() {
      return this.getReferenceData('D14C');
    },
    d15c() {
      return this.getReferenceData('D15C');
    },
    d16c() {
      return this.getReferenceData('D16C');
    },
    d17c() {
      return this.getReferenceData('D17C');
    },
    d18c() {
      return this.getReferenceData('D18C');
    }
  },
  mounted() {
    var idx = 1;
    if(this.categoryName=="PREVENZIONE COLLETTIVA") {
      idx = 2;
    } else if(this.categoryName=="AREA DISTRETTUALE" || this.categoryName=="SIO, Anagrafe tributaria" || this.categoryName=="Sistema ADT" || this.categoryName=="Pronto soccorso" || this.categoryName=="Pronto soccorso" || this.categoryName=="CUP/Ambulatorio"
        || this.categoryName=="Farmacia" || this.categoryName=="CEDAP" || this.categoryName=="SIAD" || this.categoryName=="ISTAT - Modello D12" || this.categoryName=="ADT, Flussi SDO" || this.categoryName=="Hospice") {
      idx = 3;
    } else if(this.categoryName=="CONESTO ED EQUITA" || this.categoryName=="Indagine ISTAT" || this.categoryName=="OKkio alla SALUTE" || this.categoryName=="Passi d’Argento (PdA)" || this.categoryName=="Indagine ISTAT") {
      idx = 4;
    } else if(this.categoryName=="ASSISTENZA OSPEDALIERA" || this.categoryName=="SDO" || this.categoryName=="Blocco Operatorio" || this.categoryName=="Trasfusionale" || this.categoryName=="Centro Regionale Trapianti"
      || this.categoryName=="SIO" || this.categoryName=="CEDAP") {
      idx = 5;
    }
    window.$(".menu-item"+idx).addClass('selected').next('.menu-sub-item').slideToggle();
    this.getData();
    this.$el.addEventListener('click', this.onClick);
    if(this.categoryName === "PERFORMANCE EX ANTE" || this.categoryName === "PERFORMANCE EX POST" || this.categoryName === "PERFORMANCE SETTIMANE INDICE") {
      this.openDettaglio();
    }
  },
  methods: {
    containsKey(obj, key ) {
      return Object.keys(obj).includes(key);
    },
    hasName(indexName) {
      return this.$submenusdata.get(indexName) !== undefined && this.$submenusdata.get(indexName) !== null && this.$submenusdata.get(indexName).length > 0;
    },
    getData () {
      axios
        .get(
            this.$config.API_URL+"getIndexValue?category=2",{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          this.categoryOneData = response.data.indexs
        })
        .catch(error => {     
           console.log(error, 'error');
           if(error.response.status=="401") {
             localStorage.removeItem("token");
             this.$router.push({ name: "login" });
           }
        });
    },
    onClick: function () {
      this.getData();
      if(this.categoryName === "PERFORMANCE EX ANTE" || this.categoryName === "PERFORMANCE EX POST" || this.categoryName === "PERFORMANCE SETTIMANE INDICE") {
        this.openDettaglio();
      } else {
        this.showDettaglioGrid = false;
      }
      this.psCategory = this.categoryName;
    },
    getReferenceData: function (subCategory) {
      if (this.categoryOneData.length) {
        if(this.categoryName!=='PERFORMANCE EX ANTE' && this.categoryName !== "PERFORMANCE EX POST" || this.categoryName === "PERFORMANCE SETTIMANE INDICE") {
          this.showDettaglioGrid = false;
        }
        return this.categoryOneData.find(data => data.index === subCategory)
      }
      else return {}
    },
    getSubMenusData: function (indexName) {
      return this.$submenusdata.get(indexName);
    },
    getMenusData: function (categoryName) {
      return this.$menusdata.get(categoryName);
    },
    getAreaDistrettualData: function () {
      return [
          { subcat: 'SIO, Anagrafe tributaria'},
          { subcat: 'Sistema ADT'},
          { subcat: 'Pronto soccorso'},
          { subcat: 'CUP/Ambulatorio'},
          { subcat: 'Farmacia'},
          { subcat: 'CEDAP'},
          { subcat: 'SIAD'},
        { subcat: 'ISTAT - Modello D12'},
        { subcat: 'ADT, Flussi SDO'},
        { subcat: 'Hospice'}
        ]
      ;
    },
    isCategoryHome: function (categoryName) {
      return this.$menusdata.has(categoryName);
    },
    openDettaglio() {
      this.showDettaglioGrid = true;
      if(this.$refs.dettaglioRef && this.psCategory!=this.categoryName) {
        this.$refs.dettaglioRef.load();
      }
    },
    getNoPercentage(item){
      return item.IndexName=='P14C' || item.IndexName=='D01C' || item.IndexName=='D02C' || item.IndexName=='D09Z' || item.IndexName=='D24C'
        || item.IndexName=='D30Z' || item.IndexName=='D32Z' || item.IndexName=='H04Z' || item.IndexName=='H09Zc' || item.IndexName=='H22C'
        || item.IndexName=='H23C' || item.IndexName=='H24C' || item.IndexName=='H03C' || item.IndexName=='H09Za' || item.IndexName=='H09Zb'
        || item.IndexName=='H10Za' || item.IndexName=='H10Zb' || item.IndexName=='H10Zc' || item.IndexName=='H11Za' || item.IndexName=='H11Z'
        || item.IndexName=='H21S';
    },
    getPerMille(item){
      return item.IndexName=='D05C' || item.IndexName=='D06C' || item.IndexName=='D07Ca' || item.IndexName=='D14C' || item.IndexName=='D15C' 
        || item.IndexName=='D16C' || item.IndexName=='D17C' || item.IndexName=='D18C' || item.IndexName=='D20Z' || item.IndexName=='D21Z' 
        || item.IndexName=='D22Z' || item.IndexName=='D23Z' || item.IndexName=='D33ZA' || item.IndexName=='D33ZB' || item.IndexName=='H01Z'
        || item.IndexName=='H06Z' || item.IndexName=='H07Z';
    }
  }
}

</script>
