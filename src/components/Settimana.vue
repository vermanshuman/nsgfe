<template>
  <div class="container-fluid">
    <v-row class="search-row" style="min-height: 88px;margin-top: 20px;margin-left: 0px !important;">
      <v-col cols="4">
        <button @click="openPopup" class="select-btn selectedBtn" style="margin-top: 16px;padding: 5px 10px 5px 10px;"><i class="fa fa-plus-circle"></i> Aggiungi Settimana</button>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="background-color: #fcfcfc;border-radius: 10px;margin-left: 12px;margin-top: 40px;flex: auto;margin-bottom: 60px;">
        <div style="padding: 10px;padding-bottom: 0px;background-color: #E5E5E5;border-radius: 10px;overflow-x: scroll;">
          <table id="table" style="width: 100%;">
            <tr>
              <th style="width: 33%;padding-top: 3px;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Data Inizio</th>
              <th style="width: 33%;padding-top: 3px;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Data Fine</th>
              <th style="width: 34%;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;text-align: center;">Azioni</th>
            </tr>
            <tbody>
              <tr v-for="(indexWeek, index) in indexWeeks" :key="indexWeek" :class="{'even-row': ((index+1)%2==0), 'odd-row': ((index+1)%2!=0)}">
                <td>{{indexWeek.start_date | formatDate}}</td>
                <td>{{indexWeek.end_date | formatDate}}</td>
                <td>
                  <button @click="editPopup(indexWeek)" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;"><i class="fa fa-pencil"></i> Modifica</button>
                  <button @click="deletePopup(indexWeek)" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;background-color: #ff647c;"><i class="fa fa-trash"></i> Elimina</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="margin-top: 10px;text-align: center;">
          <paginate :clickHandler="changePage" :page-count="totalPages"  :prev-text="'Prec'" :next-text="'Succ'" :container-class="'pagination'" :margin-pages="2" :page-class="'page-item'"></paginate>
        </div>
      </v-col>
    </v-row>
    <modal-vue @on-close="closePopup" :name="'settimana'" :headerOptions="{title: '  '}" noFooter style="z-index: 100;" class="dialog-width dialog-width-31">
      <div>
        <table id="form-table" style="width: 97%;">
            <tbody>
              <tr style="border: none;">
                <th colspan="2">
                  <div v-if="$v.dataInizio.$dirty && $v.dataInizio.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.dataInizio.$dirty && $v.dataInizio.$invalid" class="v-messages__message message-box">Data Inizio</div>
                    </div>
                  </div>
                  <div v-if="$v.dataFine.$dirty && $v.dataFine.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.dataFine.$dirty && $v.dataFine.$invalid" class="v-messages__message message-box">Data Fine</div>
                    </div>
                  </div>
                </th>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Data Inizio</td>
                <td class="form-input-td layout_placeholder">
                  <datepicker :language="it" v-model="dataInizio" class="form-input-cal" style="text-align: right;" placeholder="Data Inizio"></datepicker>
                </td>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Data Fine</td>
                <td class="form-input-td layout_placeholder">
                  <datepicker :language="it" v-model="dataFine" class="form-input-cal" style="text-align: right;" placeholder="Data Fine"></datepicker>
                </td>
              </tr>
              <tr style="border: none;">
                <td></td>
                <td style="text-align: right;padding-top: 30px;">
                  <button @click="closePopup" class="select-btn selectedBtn annulla-btn" style="font-size: 12px;padding: 5px 10px 5px 10px;"><i class="fa fa fa-times"></i> Annulla</button>
                  <button @click="save" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;"><i class="fa" :class="{'fa-pencil': id, 'fa-plus': !id}"></i> {{id ? 'Modifica' : 'Aggiungi'}}</button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </modal-vue>
    <modal-vue @on-close="closeDeletePopup" :name="'deleteSettimana'" :headerOptions="{title: '  '}" noFooter style="z-index: 100;" class="dialog-width">
      <div>
        <p style="padding-bottom: 10px;">Sicuro di voler eliminare questa settimana?</p>
        <div style="text-align: right;margin-right: 16px;">
          <button @click="closeDeletePopup" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;margin-bottom: 20px;">NO</button>
          <button @click="deleteSelected" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;background-color: #ff647c;">SI</button>
        </div>
      </div>
    </modal-vue>
  </div>
</template>
<style>
  .vm2_modal-content {
    min-height: 50px;
  }
  #form-table td {
    width:50%;
  }
  .form-label {
    color: #797979;
    text-align: left;
  }
  .form-input-td {
    text-align: right;
  }
  .error-border {
    border-bottom: 1px solid red;
  }
  .form-input-cal input {
    border-bottom: 1px solid #cfc9d6;
  }
  .form-input-cal input:focus {
    border-bottom: 1px solid #bdbdbd;
    text-align: left !important;
  }

  #form-table .selectedBtn {
    border: 1px solid #29b4b9 !important;
  }

  .annulla-btn:not(:hover) {
    background-color: transparent;
    color: #29b4b9 !important;
  }

  .layout_placeholder ::-webkit-input-placeholder {
      /* WebKit, Blink, Edge */
      color: #cfc9d6 !important;
      font-size: 17px;
      text-align: right !important;
  }

  .layout_placeholder :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #cfc9d6 !important;
      font-size: 17px;
      opacity: 1;
      text-align: right !important;
  }
  .layout_placeholder ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #cfc9d6 !important;
      font-size: 17px;
      opacity: 1;
      text-align: right !important;
  }
  .layout_placeholder :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #cfc9d6 !important;
      font-size: 17px;
      text-align: right !important;
  }
  .vm2_body {
    overflow-y: visible !important;
  }
</style>
<script>
import { required } from "vuelidate/lib/validators";
import moment from 'moment';
import axios from 'axios';
import Vue from 'vue';
import Datepicker from 'vuejs-datepicker';
import {it} from 'vuejs-datepicker/dist/locale';
import Paginate from 'vuejs-paginate';

export default {
    components: {Datepicker, Paginate},
    mounted() {
      this.getIndexWeeks();
    },
    data () {
      return {
        id: null,
        indexWeeks: [],
        dataInizio: null,
        dataFine: null,
        it: it,
        pageNumber: 1,
        totalPages: 0
      }
    },
    methods: {
      getIndexWeeks () {
        axios
        .get(
            this.$config.API_URL+"getIndexWeeks?page="+this.pageNumber,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          this.indexWeeks = response.data.indexWeeks;
          this.totalPages = response.data.totalPages;
          console.log(this.indexWeeks);
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      pushIndexWeeks () {
        axios
        .post(
            this.$config.API_URL+"pushIndexWeeks",
            {
              "id": this.id,
              "start_date" : moment(this.dataInizio).format('YYYY-MM-DD'),
              "end_date" : moment(this.dataFine).format('YYYY-MM-DD')
            }, {
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            },
          }
        )
        .then(response => {
          console.log(response);
          this.getIndexWeeks();
          this.closePopup();
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      deleteIndexWeeks () {
        axios
        .delete(
            this.$config.API_URL+"deleteIndexWeeks", {
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token'),
              'Content-Type': 'application/json'
            },
            data: {
              "id": this.id
            }
          }
        )
        .then(response => {
          response;
          this.getIndexWeeks();
          this.closeDeletePopup();
          this.id = null;
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      openPopup() {
        this.id = null;
        this.dataInizio = null;
        this.dataFine = null;
        this.$v.$reset();
        this.$vm2.open('settimana');
      },
      closePopup() {
        this.$vm2.close('settimana');
      },
      editPopup(indexWeek) {
        this.id = indexWeek.id;
        this.dataInizio = indexWeek.start_date;
        this.dataFine = indexWeek.end_date;
        this.$v.$reset();
        this.$vm2.open('settimana');
      },
      save() {
        this.$v.$touch();
        console.log(this.$v.$invalid);
        if(!this.$v.$invalid){
          this.pushIndexWeeks();
        }
      },
      deletePopup(healthCaresPerformance) {
        this.id = healthCaresPerformance.id;
        this.$vm2.open('deleteSettimana');
      },
      closeDeletePopup() {
        this.$vm2.close('deleteSettimana');
      },
      deleteSelected() {
        this.deleteIndexWeeks();
      },
      changePage: function(page) {
        this.pageNumber = page;
        this.getIndexWeeks();
      }
    },
    validations: {
      dataInizio: {
        required
      },
      dataFine: {
        required
      }
    }
  };
  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD-MM-YYYY')
    }
  });
</script>
