<template>
  <div class="container-fluid">
    <v-row class="search-row" style="min-height: 88px;margin-top: 20px;margin-left: 0px !important;">
      <v-col cols="4">
        <button @click="openPopup" class="select-btn selectedBtn" style="margin-top: 16px;padding: 5px 10px 5px 10px;"><i class="fa fa-plus-circle"></i> Aggiungi Prestazione</button>
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" style="background-color: #fcfcfc;border-radius: 10px;margin-left: 12px;margin-top: 40px;flex: auto;margin-bottom: 60px;">
        <div style="padding: 10px;padding-bottom: 0px;background-color: #E5E5E5;border-radius: 10px;overflow-x: scroll;">
          <table id="table" style="width: 100%;">
            <tr>
              <th style="width: 20%;padding-top: 3px;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Denominazione</th>
              <th style="width: 20%;padding-top: 3px;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Codice Regionale</th>
              <th style="width: 20%;text-align: center;padding-top: 3px;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Codice Catalogo</th>
              <th style="width: 20%;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Tipologia</th>
              <th style="width: 20%;padding-bottom: 3px;background-color: transparent;color: black;font-size: 12px;">Azioni</th>
            </tr>
            <tbody>
              <tr v-for="(healthCaresPerformance, index) in healthCaresPerformances" :key="healthCaresPerformance" :class="{'even-row': ((index+1)%2==0), 'odd-row': ((index+1)%2!=0)}">
                <td>{{healthCaresPerformance.description}}</td>
                <td>{{healthCaresPerformance.regional_code}}</td>
                <td>{{healthCaresPerformance.catalog_code}}</td>
                <td>{{healthCaresPerformance.type}}</td>
                <td>
                  <button @click="editPopup(healthCaresPerformance)" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;"><i class="fa fa-pencil"></i> Modifica</button>
                  <button @click="deletePopup(healthCaresPerformance)" class="select-btn selectedBtn" style="font-size: 12px;padding: 5px 10px 5px 10px;background-color: #ff647c;"><i class="fa fa-trash"></i> Elimina</button>
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
    <modal-vue @on-close="closePopup" :name="'performance'" :headerOptions="{title: '  '}" noFooter style="z-index: 100;" class="dialog-width dialog-width-31">
      <div>
        <table id="form-table" style="width: 97%;">
            <tbody>
              <tr style="border: none;">
                <th colspan="2">
                  <div v-if="$v.denominazione.$dirty && $v.denominazione.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.denominazione.$dirty && $v.denominazione.$invalid" class="v-messages__message message-box">Denominazione obbligatoria</div>
                    </div>
                  </div>
                  <div v-if="$v.codiceRegionale.$dirty && $v.codiceRegionale.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.codiceRegionale.$dirty && $v.codiceRegionale.$invalid" class="v-messages__message message-box">Codice Regionale obbligatoria</div>
                    </div>
                  </div>
                  <div v-if="$v.codiceCatalogo.$dirty && $v.codiceCatalogo.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.codiceCatalogo.$dirty && $v.codiceCatalogo.$invalid" class="v-messages__message message-box">Codice Catalogo obbligatoria</div>
                    </div>
                  </div>
                  <div v-if="$v.tipologia.$dirty && $v.tipologia.$invalid" class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div v-if="$v.tipologia.$dirty && $v.tipologia.$invalid" class="v-messages__message message-box">Tipologia obbligatoria</div>
                    </div>
                  </div>
                </th>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Denominazione</td>
                <td class="form-input-td layout_placeholder"><input v-model="denominazione" class="form-input" :class="{'error-border': $v.denominazione.$dirty && $v.denominazione.$invalid}" placeholder="Denominazione" /></td>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Codice Regionale</td>
                <td class="form-input-td layout_placeholder"><input v-model="codiceRegionale" class="form-input" :class="{'error-border': $v.codiceRegionale.$dirty && $v.codiceRegionale.$invalid}" placeholder="Codice Regionale" /></td>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Codice Catalogo</td>
                <td class="form-input-td layout_placeholder"><input v-model="codiceCatalogo" class="form-input" :class="{'error-border': $v.codiceCatalogo.$dirty && $v.codiceCatalogo.$invalid}" placeholder="Codice Catalogo" /></td>
              </tr>
              <tr style="border: none;">
                <td class="form-label">Tipologia</td>
                <td class="form-input-td layout_placeholder">
                  <select v-model="tipologia" style="padding-top: 2px;min-width: 167px;border: 1px solid #cfc9d6;border-radius: 5px;" :class="{'error-border': $v.tipologia.$dirty && $v.tipologia.$invalid}" >
                    <option :key="null" :value="null">-----------------</option>
                    <option :key="'Visita'" :value="'Visita'">Visita</option>
                    <option :key="'Strumentale'" :value="'Strumentale'">Strumentale</option>
                    <option :key="'Laboratorio'" :value="'Laboratorio'">Laboratorio</option>
                </select>
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
    <modal-vue @on-close="closeDeletePopup" :name="'deletePerformance'" :headerOptions="{title: '  '}" noFooter style="z-index: 100;" class="dialog-width">
      <div>
        <p style="padding-bottom: 10px;">Sicuro di voler eliminare questa prestazione?</p>
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
  .form-input {
    border-bottom: 1px solid #cfc9d6;
  }
  .form-input:focus {
    border-bottom: 1px solid #bdbdbd !important;
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
  .dialog-width-31 .vm2_modal-dialog {
    max-width: 31% !important;
  }
  .pagination > li > a, .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #29b4b9 !important;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
    z-index: 2;
    color: #fff !important;
    cursor: default;
    background-color: #29b4b9;
    border-color: #29b4b9;
  }
  .pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
    color: #777 !important;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .pagination {
    padding-left: 0 !important;
    display: inline-flex !important;
  }
</style>
<script>
import { required } from "vuelidate/lib/validators";
import axios from 'axios';
import Paginate from 'vuejs-paginate';
  export default {
    components: {Paginate},
    mounted() {
      this.getHealthCaresPerformanceData();
    },
    data () {
      return {
        id: null,
        healthCaresPerformances: [],
        denominazione: null,
        codiceRegionale: null,
        codiceCatalogo: null,
        tipologia: null,
        pageNumber: 1,
        totalPages: 0
      }
    },
    methods: {
      getHealthCaresPerformanceData () {
        axios
        .get(
            this.$config.API_URL+"getHealthCaresPerformance?page="+this.pageNumber,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          this.healthCaresPerformances = response.data.healthCaresPerformances;
          this.totalPages = response.data.totalPages;
          console.log(response.data);
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      pushHealthCaresPerformance () {
        axios
        .post(
            this.$config.API_URL+"pushHealthCaresPerformance",
            {
              "id": this.id,
              "regional_code" : this.codiceRegionale,
              "description" : this.denominazione,
              "catalog_code" : this.codiceCatalogo,
              "type" : this.tipologia
            }, {
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            },
          }
        )
        .then(response => {
          response;
          this.getHealthCaresPerformanceData();
          this.closePopup();
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      deleteHealthCaresPerformance () {
        axios
        .delete(
            this.$config.API_URL+"deleteHealthCaresPerformance", {
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
          this.getHealthCaresPerformanceData();
          this.closeDeletePopup();
          this.id = null;
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      openPopup() {
        this.id = null;
        this.denominazione = null;
        this.codiceRegionale = null;
        this.codiceCatalogo = null;
        this.tipologia = null;
        this.$v.$reset();
        this.$vm2.open('performance');
      },
      closePopup() {
        this.$vm2.close('performance');
      },
      editPopup(healthCaresPerformance) {
        this.id = healthCaresPerformance.id;
        this.denominazione = healthCaresPerformance.description;
        this.codiceRegionale = healthCaresPerformance.regional_code;
        this.codiceCatalogo = healthCaresPerformance.catalog_code;
        this.tipologia = healthCaresPerformance.type;
        this.$v.$reset();
        this.$vm2.open('performance');
      },
      deletePopup(healthCaresPerformance) {
        this.id = healthCaresPerformance.id;
        this.$vm2.open('deletePerformance');
      },
      closeDeletePopup() {
        this.$vm2.close('deletePerformance');
      },
      save() {
        this.$v.$touch();
        if(!this.$v.$invalid){
          this.pushHealthCaresPerformance();
        }
      },
      deleteSelected() {
        this.deleteHealthCaresPerformance();
      },
      changePage: function(page) {
        console.log(page)
        this.pageNumber = page;
        this.getHealthCaresPerformanceData();
      }
    },
    validations: {
      denominazione: {
        required
      },
      codiceRegionale: {
        required
      },
      codiceCatalogo: {
        required
      },
      tipologia: {
        required
      }
    }
  }
</script>