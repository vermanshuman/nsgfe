<template>
  <div class="container-fluid" style="padding-left: 4px;">
    <v-row>
      <v-row v-if="type==1 || type==2" class="search-row">
      <v-col cols="4" style="min-width: 412px;">
        <div cols="4">
          <b class="block-dis" style="margin-bottom: 8px;">Tipo selezione</b>
          <button @click="selectBtn(1)" class="select-btn" :class="{selectedBtn: selectedBtnVal==1}">Mensile</button>
          <button @click="selectBtn(2)" class="select-btn" :class="{selectedBtn: selectedBtnVal==2}">Trimestrale</button>
          <button @click="selectBtn(3)" class="select-btn" :class="{selectedBtn: selectedBtnVal==3}">Semestrale</button>
          <button @click="selectBtn(4)" class="select-btn" :class="{selectedBtn: selectedBtnVal==4}">Annuale</button>
        </div>
      </v-col>
      <v-col cols="2" style="padding-left: 0px;padding-right: 0px;">
        <div cols="4">
          <b class="block-dis" style="margin-bottom: 8px;">Raggruppamento</b>
          <select :disabled="selectedBtnVal==4" @change="type==2 ? getProvidedsData() : getData()" v-model="selectedGroup" class="search-input" style="padding-top: 2px;min-width: 105px;position: absolute;background-color: transparent;padding-left: 50px;">
              <option v-for="item in grouping[selectedBtnVal-1]" :key="item" :value="item">{{item}}</option>
          </select>
          <button class="search-btn fa fa-calendar" style="margin-left: 0px;margin-right: 5px;height: 30px;padding: 3px 13px;"></button>
        </div>
      </v-col>
      <v-col cols="2" style="padding-left: 0px;">
        <div cols="4">
          <b class="block-dis" style="margin-bottom: 8px;">Anno</b>
          <select v-model="selectedYear" @change="type==2 ? getProvidedsData() : getData()" class="search-input" style="padding-top: 2px;min-width: 105px;position: absolute;background-color: transparent;padding-left: 50px;">
              <option v-for="item in years" :key="item" :value="item">{{item}}</option>
          </select>
          <button class="search-btn fa fa-calendar" style="margin-left: 0px;margin-right: 5px;height: 30px;padding: 3px 13px;"></button>
        </div>
      </v-col>
      <v-col cols="4" style="padding-left: 0px;padding-right: 0px;max-width: 310px;position: absolute;right: 24px;">
        <div cols="12" style="float: right;margin-top: 25px;">
          <img src="../assets/image/icon-pdf.png" style="width: 30px" alt="" /><b>Genera PDF</b>
          <img src="../assets/image/icon-exsel.png" style="width: 30px;margin-left: 10px;" alt="" /><b>Genera Excel</b>
        </div>
      </v-col>
      </v-row>
      <v-row v-if="type==3" class="search-row">
      <v-col cols="7" style="min-width: 412px;">
        <div cols="4">
          <b class="block-dis" style="margin-bottom: 8px;">Settimane Indice</b>
          <button v-for="(indexWeek, index) in indexWeeks" :key="indexWeek" @click="selectBtn(index)" style="font-weight: bold;" class="select-btn" :class="{selectedBtn: indexWeek.selected}">{{indexWeek.start_date | formatDate2}}-{{indexWeek.end_date | formatDate2}}</button>
        </div>
      </v-col>
      <v-col cols="1" style="padding-left: 0px;">
        <div cols="4">
          <b class="block-dis" style="margin-bottom: 8px;">Anno</b>
          <select v-model="selectedYear" @change="getIndexWeeks()" class="search-input" style="padding-top: 2px;min-width: 105px;position: absolute;background-color: transparent;padding-left: 50px;">
              <option v-for="item in years" :key="item" :value="item">{{item}}</option>
          </select>
          <button class="search-btn fa fa-calendar" style="margin-left: 0px;margin-right: 5px;height: 30px;padding: 3px 13px;"></button>
        </div>
      </v-col>
      <v-col cols="4" style="padding-left: 0px;padding-right: 0px;max-width: 310px;position: absolute;right: 24px;">
        <div cols="12" style="float: right;margin-top: 25px;">
          <img src="../assets/image/icon-pdf.png" style="width: 30px" alt="" /><b>Genera PDF</b>
          <img src="../assets/image/icon-exsel.png" style="width: 30px;margin-left: 10px;" alt="" /><b>Genera Excel</b>
        </div>
      </v-col>
      </v-row>
      <v-col cols="12" v-if="type==1 || type==3" style="background-color: #fcfcfc;border-radius: 10px;margin-left: 12px;margin-top: 40px;flex: auto;margin-bottom: 0px;">
        <div class="scrollTop" style="overflow-x: scroll;"><div class="cloneTable" style="height: 1px;"></div></div>
        <div class="scrollBottom" style="padding: 10px;padding-bottom: 0px;background-color: #E5E5E5;border-radius: 10px;overflow-x: scroll;">
          <table id="table">
            <col>
            <col>
            <col>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th colspan="4" scope="colgroup" style="text-transform: uppercase;">Priorità U</th>
              <th colspan="4" scope="colgroup" style="text-transform: uppercase;">Priorità B</th>
              <th colspan="4" scope="colgroup" style="text-transform: uppercase;">Priorità D</th>
              <th colspan="4" scope="colgroup" style="text-transform: uppercase;">Priorità P</th>
            </tr>
            <tr class="second-col">
              <td>Progressivo</td>
              <td>Codice</td>
              <td style="text-align: left;padding-left:20px;">Prestazione</td>
              <td style="text-transform: uppercase;">Prenot.</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">Prenot.</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">Prenot.</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">Prenot.</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
            </tr>
      
            <tbody>
              <tr v-for="(reservation, index) in reservationsData" :key="reservation" :class="{'even-row': ((index+1)%2==0), 'odd-row': ((index+1)%2!=0)}">
                <td>{{index+1}}</td>
                <td>{{reservation.health_care_code}}</td>
                <td style="text-align: left;padding-left:20px;"><b>{{reservation.health_care_description}}</b></td>
                <td style="color: #5f619e;">{{reservation.u_reservations}}</td>
                <td style="color: #5f619e;">{{reservation.u_rsv_tobe_guaranteed}}</td>
                <td style="color: #5f619e;">{{reservation.u_waiting_days}}</td>
                <td style="color: #5f619e;">
                  <img width="14px" v-if="reservation.u_performance>0 && reservation.u_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.u_performance>=50 && reservation.u_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.u_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{reservation.u_performance ? reservation.u_performance+' %' : ''}}
                </td>
                <td style="color: #ffb036;">{{reservation.b_reservations}}</td>
                <td style="color: #ffb036;">{{reservation.b_rsv_tobe_guaranteed}}</td>
                <td style="color: #ffb036;">{{reservation.b_waiting_days}}</td>
                <td style="color: #ffb036;">
                  <img width="14px" v-if="reservation.b_performance>0 && reservation.b_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.b_performance>=50 && reservation.b_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.b_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{reservation.b_performance ? reservation.b_performance+' %' : ''}}
                </td>
                <td style="color: #28b3b8;">{{reservation.d_reservations}}</td>
                <td style="color: #28b3b8;">{{reservation.d_rsv_tobe_guaranteed}}</td>
                <td style="color: #28b3b8;">{{reservation.d_waiting_days}}</td>
                <td style="color: #28b3b8;">
                  <img width="14px" v-if="reservation.d_performance>0 && reservation.d_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.d_performance>=50 && reservation.d_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.d_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{reservation.d_performance ? reservation.d_performance+' %' : ''}}
                </td>
                <td style="color: #f55674;">{{reservation.p_reservations}}</td>
                <td style="color: #f55674;">{{reservation.p_rsv_tobe_guaranteed}}</td>
                <td style="color: #f55674;">{{reservation.p_waiting_days}}</td>
                <td style="color: #f55674;">
                  <img width="14px" v-if="reservation.p_performance>0 && reservation.p_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.p_performance>=50 && reservation.p_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="reservation.p_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{reservation.p_performance ? reservation.p_performance+' %' : ''}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
      <v-col cols="12" v-if="type==2" style="background-color: #fcfcfc;border-radius: 10px;margin-left: 12px;margin-top: 40px;flex: auto;margin-bottom: 50px;">
        <div class="scrollTop" style="overflow-x: scroll;"><div class="cloneTable2" style="height: 1px;"></div></div>
        <div class="scrollBottom" style="padding: 10px;padding-bottom: 0px;background-color: #E5E5E5;border-radius: 10px;overflow-x: scroll;">
          <table id="table-2">
            <col>
            <col>
            <col>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <colgroup span="3"></colgroup>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th colspan="5" scope="colgroup" style="text-transform: uppercase;">Priorità U</th>
              <th colspan="5" scope="colgroup" style="text-transform: uppercase;">Priorità B</th>
              <th colspan="5" scope="colgroup" style="text-transform: uppercase;">Priorità D</th>
              <th colspan="5" scope="colgroup" style="text-transform: uppercase;">Priorità P</th>
              <th scope="colgroup" style="text-transform: uppercase;"></th>
            </tr>
            <tr class="second-col-2">
              <td>Progressivo</td>
              <td>Codice</td>
              <td style="text-align: left;padding-left:20px;">Prestazione</td>
              <td style="text-transform: uppercase;">EROGATI</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">DISPERSIONE</td>
              <td style="text-transform: uppercase;">EROGATI</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">DISPERSIONE</td>
              <td style="text-transform: uppercase;">EROGATI</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">DISPERSIONE</td>
              <td style="text-transform: uppercase;">EROGATI</td>
              <td style="text-transform: uppercase;">DA GARANTIRE</td>
              <td style="text-transform: uppercase;">Giorni di Attessa</td>
              <td style="text-transform: uppercase;">Perform.</td>
              <td style="text-transform: uppercase;">DISPERSIONE</td>
              <td style="text-transform: uppercase;min-width: 10px;"></td>
            </tr>
      
            <tbody>
              <tr v-for="(provided, index) in providedsData" :key="provided" :class="{'even-row': ((index+1)%2==0), 'odd-row': ((index+1)%2!=0)}">
                <td>{{index+1}}</td>
                <td>{{provided.health_care_code}}</td>
                <td style="text-align: left;padding-left:20px;"><b>{{provided.health_care_description}}</b></td>
                <td style="color: #5f619e;">{{provided.u_provideds}}</td>
                <td style="color: #5f619e;">{{provided.u_rsv_tobe_guaranteed}}</td>
                <td style="color: #5f619e;">{{provided.u_waiting_days}}</td>
                <td style="color: #5f619e;">
                  <img width="14px" v-if="provided.u_performance>0 && provided.u_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.u_performance>=50 && provided.u_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.u_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{provided.u_performance ? provided.u_performance+' %' : ''}}
                </td>
                <td style="color: #5f619e;">{{provided.u_dispersion}}</td>
                <td style="color: #ffb036;">{{provided.b_provideds}}</td>
                <td style="color: #ffb036;">{{provided.b_rsv_tobe_guaranteed}}</td>
                <td style="color: #ffb036;">{{provided.b_waiting_days}}</td>
                <td style="color: #ffb036;">
                  <img width="14px" v-if="provided.b_performance>0 && provided.b_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.b_performance>=50 && provided.b_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.b_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{provided.b_performance ? provided.b_performance+' %' : ''}}
                </td>
                <td style="color: #ffb036;">{{provided.d_dispersion}}</td>
                <td style="color: #28b3b8;">{{provided.d_provideds}}</td>
                <td style="color: #28b3b8;">{{provided.d_rsv_tobe_guaranteed}}</td>
                <td style="color: #28b3b8;">{{provided.d_waiting_days}}</td>
                <td style="color: #28b3b8;">
                  <img width="14px" v-if="provided.d_performance>0 && provided.d_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.d_performance>=50 && provided.d_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.d_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{provided.d_performance ? provided.d_performance+' %' : ''}}
                </td>
                <td style="color: #28b3b8;">{{provided.p_dispersion}}</td>
                <td style="color: #f55674;">{{provided.p_provideds}}</td>
                <td style="color: #f55674;">{{provided.p_rsv_tobe_guaranteed}}</td>
                <td style="color: #f55674;">{{provided.p_waiting_days}}</td>
                <td style="color: #f55674;">
                  <img width="14px" v-if="provided.p_performance>0 && provided.p_performance<50" src="./../assets/image/indicore-nella-griglia-rosso.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.p_performance>=50 && provided.p_performance<=80" src="./../assets/image/indicore-nella-griglia-gialla.png" style="margin-right: 3px;">
                  <img width="14px" v-if="provided.p_performance>80" src="./../assets/image/indicore-nella-griglia-verde.png" style="margin-right: 3px;">
                  {{provided.p_performance ? provided.p_performance+' %' : ''}}
                </td><td style="color: #f55674;">{{provided.p_dispersion}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style>
  .block-dis {
    display: block;
  }
  .search-btn {
    background-color: #29b4b9;
    color: #fff;
    padding: 3px 20px;
    margin-left: 10px;
    border-radius: 7px;
  }
  .search-input {
    height: 30px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #29b4b9;
    border-radius: 8px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  #table, #table-2 {
    font-size: 10px;
  }
   #table tbody, #table-2 tbody {
    font-size: 11px;
  }
  #table th, #table-2 th {
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
  }
  #table th:not(:last-child), .second-col td:first-child, .second-col td:nth-child(2), .second-col td:nth-child(3), .second-col td:nth-child(7), .second-col td:nth-child(11), .second-col td:nth-child(15) {
    border-right: 2px solid #E5E5E5;
  }
  #table-2 th:not(:nth-child(7)), .second-col-2 td:first-child, .second-col-2 td:nth-child(2), .second-col-2 td:nth-child(3), .second-col-2 td:nth-child(8), .second-col-2 td:nth-child(13), .second-col-2 td:nth-child(18) {
    border-right: 2px solid #E5E5E5;
  }

  #table th:first-child, #table th:nth-child(2) ,#table-2 th:first-child, #table-2 th:nth-child(2) {
    padding-top: 30px;
    background-color: #8E8E8E;
    width: 5%;
  }
  #table th:nth-child(2), #table-2 th:nth-child(2) {
    background-color: #AFAFAF;
  }
  #table th:nth-child(3), #table-2 th:nth-child(3) {
    background-color: #ff6e3f;
    padding-top: 30px;
    width: 18%;
    text-align: left;
  }
  #table th:nth-child(4), #table-2 th:nth-child(4) {
    background-color: #5f619e;
    padding-top: 3px;
    padding-bottom: 27px;
    width: 18%;
  }
  #table th:nth-child(5), #table-2 th:nth-child(5) {
    background-color: #ffb036;
    padding-top: 3px;
    padding-bottom: 27px;
    width: 18%;
  }
  #table th:nth-child(6), #table-2 th:nth-child(6) {
    background-color: #28b3b8;
    padding-top: 3px;
    padding-bottom: 27px;
    width: 18%;
  }
  #table th:last-child, #table-2 th:nth-child(7) {
    background-color: #f55674;
    padding-top: 3px;
    padding-bottom: 27px;
    width: 18%;
  }
  .second-col td, .second-col-2 td:not(:last-child) {
    color: #fff;
    padding: 10px 12px;
    text-align: center;
    padding-top: 5px;
  }
  .second-col td:first-child, .second-col td:nth-child(2), .second-col-2 td:first-child, .second-col-2 td:nth-child(2)  {
    background-color: #8E8E8E;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .second-col td:nth-child(2), .second-col-2 td:nth-child(2) {
    background-color: #AFAFAF;
  }
  .second-col td:nth-child(3), .second-col-2 td:nth-child(3) {
    background-color: #ff6e3f;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .second-col td:nth-child(4), .second-col td:nth-child(8), .second-col td:nth-child(12), .second-col td:nth-child(16),
    .second-col-2 td:nth-child(4), .second-col-2 td:nth-child(9), .second-col-2 td:nth-child(14), .second-col-2 td:nth-child(19) {
    border-bottom-left-radius: 10px;
  }
  .second-col td:nth-child(7), .second-col td:nth-child(11), .second-col td:nth-child(15), .second-col td:nth-child(19),
    .second-col-2 td:nth-child(8), .second-col-2 td:nth-child(13), .second-col-2 td:nth-child(18), .second-col-2 td:nth-child(23) {
    border-bottom-right-radius: 10px;
  }
  .second-col td:nth-child(4), .second-col td:nth-child(5), .second-col td:nth-child(6), .second-col td:nth-child(7),
    .second-col-2 td:nth-child(4), .second-col-2 td:nth-child(5), .second-col-2 td:nth-child(6), .second-col-2 td:nth-child(7), .second-col-2 td:nth-child(8) {
    background-color: #5f619e;
  }
  .second-col td:nth-child(8), .second-col td:nth-child(9), .second-col td:nth-child(10), .second-col td:nth-child(11),
    .second-col-2 td:nth-child(9), .second-col-2 td:nth-child(10), .second-col-2 td:nth-child(11), .second-col-2 td:nth-child(12), .second-col-2 td:nth-child(13) {
    background-color: #ffb036;
  }
  .second-col td:nth-child(12), .second-col td:nth-child(13), .second-col td:nth-child(14), .second-col td:nth-child(15),
    .second-col-2 td:nth-child(14), .second-col-2 td:nth-child(15), .second-col-2 td:nth-child(16), .second-col-2 td:nth-child(17), .second-col-2 td:nth-child(18) {
    background-color: #28b3b8;
  }
  .second-col td:nth-child(16), .second-col td:nth-child(17), .second-col td:nth-child(18), .second-col td:nth-child(19),
    .second-col-2 td:nth-child(19), .second-col-2 td:nth-child(20), .second-col-2 td:nth-child(21), .second-col-2 td:nth-child(22), .second-col-2 td:nth-child(23) {
    background-color: #f55674;
  }
  tbody td {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  tbody tr {
    border-bottom: 1px solid lightgray;
  }
  .even-row {
    background-color: #fff;
  }
  .odd-row, #table {
    background-color: #E5E5E5;
  }

  @media only screen and (max-width: 1720px) {
    .second-col td {
      padding: 10px 0.1vw !important;
    }
    .second-col td:nth-child(3), tbody td:nth-child(3), tbody {
      padding-left: 0.1vw !important;
    }
  }
</style>
<script>
import axios from 'axios';
import moment from 'moment';
import Vue from 'vue';
  export default {
    props: ['type'],
    mounted() {
      this.load();
    },
    data () {
      return {
        reservationsData: [],
        providedsData: [],
        selectedBtnVal: 1,
        selectedYear: 2019,
        selectedGroup: "",
        grouping: [["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],["I° Trimestre","II° Trimestre","III° Trimestre","IV° Trimestre"],
        ["I° Semestre","II° Semestre"], ['']],
        years: this.type==2 ? [2015,2016,2017,2018,2019,2020,2021,2022] : [2019,2020,2021,2022],
        indexWeeks: []
      }
    },
    computed: {
      getGroup() {
        const today = new Date();
        if(this.selectedBtnVal==1) {
          return this.grouping[this.selectedBtnVal-1][today.getMonth()];
        }
        return this.grouping[this.selectedBtnVal-1][0];
      },
      getCurrentYear() {
        const today = new Date();
        const currentYear = today.getFullYear();
        return currentYear;
      }
    },
    methods: {
      load() {
        this.selectedYear = this.getCurrentYear;
        this.selectedGroup = this.getGroup;
        if(this.type==3) {
          this.getIndexWeeks();
        } else if(this.type==2) {
          this.getProvidedsData();
        } else {
          this.getData();
        }
        this.$nextTick(function () {
          initTopScroll();
        });
      },
      selectBtn(val) {
        if(this.type==3) {
          for(var i=0;i<this.indexWeeks.length;i++) {
            this.indexWeeks[i].selected = i==val;
          }
          this.getGroupedIndexWeek();
          return;
        }
        this.selectedBtnVal = val;
        this.selectedGroup = this.getGroup;
        if(this.type==2) {
          this.getProvidedsData();
        } else {
          this.getData();
        }
      },
      getData () {
        var query = this.getQuery();
        axios
        .get(
            this.$config.API_URL+"getGroupedReservations?year="+this.selectedYear+query,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          this.reservationsData = response.data.reservations;
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      getProvidedsData () {
        var query = this.getQuery();
        console.log(this.selectedYear+query);
        axios
        .get(
            this.$config.API_URL+"getGroupedProvideds?year="+this.selectedYear+query,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.providedsData = response.data.provideds;
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      getIndexWeeks () {
        axios
        .get(
            this.$config.API_URL+"getIndexWeeks?year="+this.selectedYear,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          this.indexWeeks = [];
          this.reservationsData = [];
          var data = response.data.indexWeeks;
          console.log(response.data.indexWeeks);
          for(var i=0;i<data.length;i++) {
            this.indexWeeks.push({id:data[i].id ,start_date: data[i].start_date, end_date: data[i].end_date, selected: i==0});
          }
          this.getGroupedIndexWeek();
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      getGroupedIndexWeek () {
        var startDate, endDate;
        for(var i=0;i<this.indexWeeks.length;i++) {
            if(this.indexWeeks[i].selected) {
              startDate = moment(this.indexWeeks[i].start_date).format('DD-MM-YYYY');
              endDate = moment(this.indexWeeks[i].end_date).format('DD-MM-YYYY');
            }
        }
        var query = "Startdate="+startDate+"&EndDate="+endDate;
        axios
        .get(
            this.$config.API_URL+"getGroupedIndexWeek?"+query,{
            headers: {
              Authorization: 'Bearer' + localStorage.getItem('token')
            }
          }
        )
        .then(response => {
          console.log(response.data);
          this.reservationsData = response.data.reservations;
        })
        .catch(error => {     
           console.log(error, 'error');
        });
      },
      getQuery() {
        var month = this.selectedBtnVal==1 ? "&month="+(this.grouping[this.selectedBtnVal-1].indexOf(this.selectedGroup)+1) : "";
        var quarter = this.selectedBtnVal==2 ? "&quarter="+(this.grouping[this.selectedBtnVal-1].indexOf(this.selectedGroup)+1) : "";
        var semester = this.selectedBtnVal==3 ? "&semester="+(this.grouping[this.selectedBtnVal-1].indexOf(this.selectedGroup)+1) : "";
        return month+quarter+semester;
      }
    }
  };
  Vue.filter('formatDate2', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
  });

  function initTopScroll() {
    setTimeout(() => {
      var tableWidth = window.$('#table').width()+10;
      var tableWidth2 = window.$('#table-2').width();
      window.$('.cloneTable').width(tableWidth+'px');
      window.$('.cloneTable2').width(tableWidth2+'px');
      window.$(".scrollTop").scroll(function(){
          window.$(".scrollBottom")
              .scrollLeft(window.$(".scrollTop").scrollLeft());
      });
      window.$(".scrollBottom").scroll(function(){
          window.$(".scrollTop")
              .scrollLeft(window.$(".scrollBottom").scrollLeft());
      });
    }, 10);
  }
</script>
