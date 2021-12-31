<template>
         <v-card
    class="rounded-t-xl elevation-10"
    max-width="344"
  >
    <v-card-text class="pt-1 rounded">
      <div class="font-weight-bold grey--text text--lighten-2"> {{name}} </div>
      <div class="d-flex">
        <div>
          <v-progress-circular reverse :value="value ? value : 0" :size="100"
            :width="13"
            rotate="270"
            :color="barColor">
              <div 
                class="d-flex justify-content-center align-items-center black--text rounded-circle elevation-10 percentage-wrapper">
                <span>{{value ? value : 0}}</span>
                <span class="text-h6 font-weight-black" style="vertical-align:middle" v-if="!noPercentage && !perMille">%</span>
                <span class="text-h6 font-weight-black" style="vertical-align:middle" v-if="perMille">‰</span>
              </div>
          </v-progress-circular>
        </div>
        <div class="pl-4 black--text description" v-bind:style="{minHeight: desHeight ? desHeight : '127px'}">
          {{desc}}
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="pa-0" color="#26c6da">
         <v-img
      v-bind:style="{background: barColor}"
      class="ma-0"
    >
    <div class="d-flex py-2 px-2">
                <v-btn
      rounded
      color="elevation-4"
      dark @click="openInfoPopup"
      class="px-1" :class="{intervalloBtn: popupInfoOpen, white: !popupInfoOpen}"
    >
    <img width="24px" src="./../assets/image/info.png">
    <v-spacer />
      <span class="black--text font-weight-bold footer-button-text">info indicatore </span>
    </v-btn>
    <v-spacer />
      <v-btn
      rounded
      color="elevation-4"
      dark @click="openPopup"
      class="px-1" :class="{intervalloBtn: popupOpen, white: !popupOpen}"
    >
    <img width="24px" src="./../assets/image/clock.png">
      <span class="black--text font-weight-bold footer-button-text">intervallo tempo </span>
    </v-btn>
    </div>
         </v-img>
    </v-card-actions>
    <modal-vue @on-close="closePopup" :name="value+''" :headerOptions="{title: ' '}" noFooter style="z-index: 100;" :class="{hide: !popupOpen}">
      <img src="../assets/image/clock.png" style="width: 75px;position: absolute;margin-top: -85px;margin-left: -32px;" />
      <div>
        <p>Periodo di riferimento: {{period}}</p>
        <p>Anno riferimento: {{year}}</p>
      </div>
    </modal-vue>
    <modal-vue @on-close="closeInfoPopup" :name="value+'_info'" :headerOptions="{title: '  '}" noFooter style="z-index: 100;" class="dialog-width" :class="{hide: !popupInfoOpen}">
      <img src="../assets/image/info.png" style="width: 75px;position: absolute;margin-top: -80px;margin-left: -32px;" />
      <div>
        <vueScroll>
          <p class="infoDes" v-html="infoDescription"></p>
        </vueScroll>
      </div>
    </modal-vue>
    </v-card>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Card',
    props: ['name', 'value', 'period', 'year', 'desc', 'desHeight', 'noPercentage', 'perMille'],
    data(){
      return {
        popupOpen:false,
        popupInfoOpen: false,
        infoDescription: null
      }
    },
    computed: {
      barColor () {
        if (this.value >= 81) return '#66dd42';
        if (this.value >= 51 && this.value <= 80) return '#f6d04d';
        if (this.value >= 0 && this.value <= 50) return '#f6654d';
        else return '#fff';
      }
    },
    methods: {
      openInfoPopup() {
        this.infoDescription = '';
        console.log(this.name);
        this.getInfoData(this.name);
        this.$vm2.open(this.value+'_info');
        this.popupInfoOpen = true;
      },
      closeInfoPopup() {
        this.$vm2.close(this.value+'_info');
        this.popupInfoOpen = false;
      },
      openPopup() {
        this.$vm2.open(this.value);
        this.popupOpen = true;
      },
      closePopup() {
        this.$vm2.close(this.value);
        this.popupOpen = false;
      },
      getInfoData(indexName) {
        axios
        .get(
            this.$config.API_URL+"getInfoIndex?index=" + indexName,{
              headers: {
                Authorization: 'Bearer' + localStorage.getItem('token')
              }
            }
        )
        .then(response => {
          this.infoDescription = response.data.indexDescription+response.data.indexDescription;
        })
        .catch(error => {
          console.log(error, 'error');
          if(error.response.status=="401") {
            localStorage.removeItem("token");
            this.$router.push({ name: "login" });
          }
        });
      },
    }
}
</script>

<style>
.description {
  font-size: 12px;
  line-height: 1.5;
}

.percentage-wrapper{
  width: 72px;
  height: 72px;
  font-family: 'GillSans-Bold';
  font-size: 34px;
}

.footer-button-text {
  font-size: 10px;
  letter-spacing: 1px;
}
.dialog-width .vm2_modal-content {
  box-shadow: inset 0px 1px 10px 0px #CDCECE, 0 0 0 3px hsl(0deg 0% 100%), 0px 1px 10px 5px #CDCECE;
  height: 55%;
  min-width: 50vw;
}
.vm2_modal-content {
  border-radius: 10px !important;
  box-shadow: 0px 1px 10px 0px lightblue;
}
.vm2_body {
  padding-left: 20px;
}
hr {
    border: none !important;
}
.intervalloBtn {
  background-color: #39a3cb !important;
}
.v-card__text .grey--text, .description, .footer-button-text {
  font-family: 'GillSans-Medium', serif;
}
.v-card__text {
  font-size: 0.975rem !important;
}
.description {
  font-size: 15px;
}
.footer-button-text {
  margin-top: 3px;
}
.dialog-width .vm2_modal-dialog {
  max-width: 40% !important;
}
.dialog-width .vm2_body {
  margin-top: -20px !important;
}
.__bar-wrap-is-vertical {
  background-color: #d1d1d1 !important;
}
.__bar-is-vertical {
  background-color: #575757 !important;
}
.infoDes {
  min-height: calc( 50vh - 65px );
  max-height: calc( 50vh - 65px );
}
</style>
