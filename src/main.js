import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './assets/css/style.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSlimScroll from 'vue-slimscroll'
import vuescroll from 'vuescroll'
import Modal from "@burhanahmeed/vue-modal-2";
import SubcategoryIndex from "@/wrappers/SubcategoryIndex";

Vue.use(Vuelidate)
Vue.use(VueToast);
//Vue.$toast.open({/* options */});
const instance = Vue.$toast.open('You did it!');
instance.dismiss();
// Dismiss all opened toast immediately
Vue.$toast.clear();
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(VueSlimScroll)
Vue.use(Modal, {
  componentName: "ModalVue"
});
Vue.use(vuescroll, {
  ops: {
    bar: {
      background: 'rgba(34,27,27,0.6)',
      keepShow: true
    },
    rail: {
      background: '#d1d1d1',
      opacity: 0.6,
      size: '6px',
      keepShow: true
    }
  }
});
Vue.prototype.$menusdata = new Map();
Vue.prototype.$menusdata.set("AREA DISTRETTUALE" , [
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
]);

Vue.prototype.$menusdata.set("PREVENZIONE COLLETTIVA" , [
  { subcat: 'Anagrafe Vaccinale'},
  { subcat: 'INAIL, ISTAT e INPS'},
  { subcat: 'Piano Regionale per la Prevenzione'},
  { subcat: 'Piattaforma VETINFO'},
  { subcat: 'NSIS - PNR'},
  { subcat: 'Banca dati CROGM - NSIS vigilanza alimenti'},
  { subcat: 'ISTAT - PASSI'},
  { subcat: 'Sistema Informativo screening'}
]);

Vue.prototype.$menusdata.set("CONESTO ED EQUITA" , [
  { subcat: 'Indagine ISTAT'},
  { subcat: 'OKkio alla SALUTE'},
  { subcat: 'Passi d’Argento (PdA)'}
]);

Vue.prototype.$menusdata.set("ASSISTENZA OSPEDALIERA" , [
  { subcat: 'SDO'},
  { subcat: 'Blocco Operatorio'},
  { subcat: 'Trasfusionale'},
  { subcat: 'Centro Regionale Trapianti'},
  { subcat: 'SIO'},
  { subcat: 'CEDAP'}
]);

Vue.prototype.$submenusdata = new Map();
const d01c = new SubcategoryIndex("D01C","Proporzione di eventi maggiori cardiovascolari, cerebrovascolari o decessi (Major Adverse Cardiac and Cerebrovascular event - MACCE) entro 12 mesi da un episodio di Infarto Miocardico Acuto (IMA)");
const d02c = new SubcategoryIndex("D02C","Proporzione di eventi maggiori cardiovascolari, cerebrovascolari o decessi (Major Adverse Cardiac and Cerebrovascular event - MACCE) entro 12 mesi da un episodio di ictus ischemico");
const d19c = new SubcategoryIndex("D19C","Percentuale di donne che hanno effettuato pi\u00F9 di quattro ecografie in gravidanza");
const d03c = new SubcategoryIndex("D03C", "Tasso di ospedalizzazione standardizzato (per 100.000 ab.) in et\u00E0 adulta (\u2265 18 anni) per complicanze (a breve e lungo termine) per diabete, BPCO e scompenso cardiaco")
const d04c = new SubcategoryIndex("D04C", "Tasso di ospedalizzazione standardizzato (per 100.000 ab.) in et\u00E0 pediatrica (< 18 anni) per asma e gastroenterite")
const d05c = new SubcategoryIndex("D05C", "Tasso di accessi in PS nei giorni feriali (da luned\u00EC a venerd\u00EC) dalle ore 8.00 alle ore 20.00 di adulti con codice di dimissione bianco/verde standardizzato (per 1000 ab. residenti adulti)")
const d06c = new SubcategoryIndex("D06C", "Tasso di accessi in PS nei giorni feriali (da luned\u00EC a venerd\u00EC) dalle ore 8.00 alle ore 20.00 di minori con codice di dimissione bianco/verde standardizzato (per 1000 ab. minori 0-14 anni)")
const d07ca = new SubcategoryIndex("D07Ca", "Tasso di accessi in PS nelle ore notturne, nei giorni prefestivi e festivi (sabato, domenica e festivit\u00E0) di adulti con codice di dimissione bianco/verde standardizzato (per 1000 ab. residenti adulti)")
const d07cb= new SubcategoryIndex("D07Ca", "Tasso di accessi in PS nelle ore notturne, nei giorni prefestivi e festivi (sabato, domenica e festivit\u00E0) di minori con codice di dimissione bianco/verde standardizzato (per 1.000 ab. minori 0-14 anni)")
const d08c = new SubcategoryIndex("D08C", "Numero di interventi per le patologie First Hour Quintet (FHQ) effettuati con mezzo di soccorso avanzato sul totale degli interventi per patologie First Hour Quintet (FHQ) per anno")
const d09z = new SubcategoryIndex("D09Z", "Intervallo Allarme-Target dei mezzi di soccorso")
// const d10z = new SubcategoryIndex("D10Z", "Percentuale di prestazioni, garantite entro i tempi, della classe di priorit� B in rapporto al totale di prestazioni di classe B")
// const d11z = new SubcategoryIndex("D11Z", "Percentuale di prestazioni, garantite entro i tempi, della classe di priorit� D in rapporto al totale di prestazioni di classe D")
// const d12c = new SubcategoryIndex("D12C", "Consumo pro-capite di prestazioni di laboratorio")
// const d13c = new SubcategoryIndex("D13C", "Consumo di prestazioni di RM osteoarticolari in pazienti anziani con pi� di 65 anni per 1000 abitanti")
const d14c = new SubcategoryIndex("D14C", "Consumo di farmaci sentinella/traccianti per 1.000 abitanti. Antibiotici")
const d15c = new SubcategoryIndex("D15C", "Consumo di farmaci sentinella/traccianti per 1.000 abitanti. Antidepressivi")
const d16c = new SubcategoryIndex("D16C", "Consumo di farmaci sentinella/traccianti per 1.000 abitanti. Inibitori di pompa")
const d17c = new SubcategoryIndex("D17C", "Consumo di farmaci sentinella/traccianti per 1.000 abitanti. Antiipertensivi")
const d18c = new SubcategoryIndex("D18C", "Consumo di farmaci sentinella/traccianti per 1.000 abitanti. Statine")
const d20z = new SubcategoryIndex("D20Z", "Tasso di pazienti adulti seguiti a domicilio con Coefficiente di Intensit\u00E0 Assistenziale (CIA) base in rapporto alla popolazione residente")
const d21z = new SubcategoryIndex("D21Z", "Tasso di pazienti minori seguiti a domicilio con Coefficiente di Intensit\u00E0 Assistenziale (CIA) base in rapporto alla popolazione minore residente")
const d22z = new SubcategoryIndex("D22Z", "Tasso di pazienti trattati in assistenza domiciliare integrata per intensit\u00E0 di cura (CIA 1, CIA 2, CIA 3)")
const d23z = new SubcategoryIndex("D23Z", "Tasso di PIC (Prese in Carico) in assistenza domiciliare integrata per intensit\u00E0 di cura (CIA 1, CIA 2, CIA 3)")
const d24c = new SubcategoryIndex("D24C", "Numero di interruzioni volontarie di gravidanza (IVG) ripetute in rapporto al totale delle IVG, per residenza della donna (distinta in \u201CItalia\u201D ed \u201CEstero\u201D)")
const d25c = new SubcategoryIndex("D25C", "Percentuale di interruzioni volontarie di gravidanza (IVG) con certificazione rilasciata dal Consultorio familiare per residenza della donna (distinta in \u201CItalia\u201D ed \u201CEstero\u201D)")
const d26c = new SubcategoryIndex("D26C", "Tasso di ospedalizzazione per patologie psichiatriche in rapporto alla popolazione residente maggiorenne")
const d27c = new SubcategoryIndex("D27C", "Percentuale di re-ricoveri tra 8 e 30 giorni in psichiatria")
const d28c = new SubcategoryIndex("D28C", "Numero di TSO a residenti maggiorenni in rapporto alla popolazione residente")
const d29c = new SubcategoryIndex("D29C", "Tasso di ospedalizzazione di minori con diagnosi principale connessa con i problemi psichiatrici in rapporto alla popolazione di minori residenti")
const d30z = new SubcategoryIndex("D30Z", "Numero deceduti per causa di tumore assistiti dalla Rete di cure palliative sul numero deceduti per causa di tumore")
const d31c = new SubcategoryIndex("D31C", "Variazione % del rapporto tra il numero annuo di giornate di cure palliative erogate a domicilio per i malati deceduti a causa di tumore e il numero dei deceduti per causa di tumore")
const d32z = new SubcategoryIndex("D32Z", "Numero di ricoveri in Hospice di malati con patologia oncologica, provenienti da ricovero ospedaliero o da domicilio NON assistito nei quali il periodo di ricovero in Hospice \u00E8 inferiore o uguale a 7 giorni sul numero di ricoveri in Hospice di malati con patologia oncologica")
const d33za = new SubcategoryIndex("D33ZA", "Numero di anziani non autosufficienti in trattamento socio-sanitario residenziale/semiresidenziale in rapporto alla popolazione residente, per tipologia di trattamento (intensit\u00E0 di cura)")
const d33zb= new SubcategoryIndex("D33ZB", "Numero di anziani non autosufficienti in trattamento socio-sanitario residenziale/semiresidenziale in rapporto alla popolazione residente, per tipologia di trattamento (intensit\u00E0 di cura)")
//Prevenzione Collettiva e Sanit� pubblica
const p01c= new SubcategoryIndex("P01C", "Copertura vaccinale nei bambini a 24 mesi per ciclo base")
const p02c= new SubcategoryIndex("P02C", "Copertura vaccinale nei bambini a 24 mesi per la 1\u00B0 dose di vaccino contro morbillo, parotite, rosolia (MPR)")
const p03c= new SubcategoryIndex("P03C", "Copertura vaccinale anti-pneumococcica")
const p04c= new SubcategoryIndex("P04C", "Copertura vaccinale anti-meningococcica C")
const p05c= new SubcategoryIndex("P05C", "Copertura vaccinale anti-HPV")
const p06c= new SubcategoryIndex("P06C", "Copertura vaccinale per vaccinazione antinfluenzale nell\u2019anziano")
const p07ca= new SubcategoryIndex("P07Ca", "Denunce di infortunio sul lavoro")
const p07cb= new SubcategoryIndex("P07Cb", "Infortuni sul lavoro riconosciuti")
const p08z= new SubcategoryIndex("P08Z", "Sicurezza dei prodotti chimici - controlli nelle fasi di produzione, importazione, immissione sul mercato, utilizzazione e distribuzione (reg. REACH e CLP)")
const p09z= new SubcategoryIndex("P09Z", "Copertura delle principali attivit\u00E0 di eradicazione, controllo e sorveglianza delle malattie animali nella filiera produttiva ai fini delle garanzie di sanit\u00E0 pubblica")
const p10z= new SubcategoryIndex("P10Z", "Copertura delle principali attivit\u00E0 riferite al controllo delle anagrafi animali, della alimentazione degli animali da reddito e della somministrazione di farmaci ai fini delle garanzie di sicurezza alimentare per il Cittadino")
const p11z= new SubcategoryIndex("P11Z", "Copertura delle principali attivit\u00E0 riferite al controllo del benessere degli animali destinati alla produzione di alimenti")
const p12z= new SubcategoryIndex("P12Z", "Copertura delle principali attivit\u00E0 di controllo per la contaminazione degli alimenti, con particolare riferimento alla ricerca di sostanze illecite, di residui di contaminanti, di farmaci, di fitofarmaci e di additivi negli alimenti di origine animale e vegetale")
const p13z= new SubcategoryIndex("P13Z", "Copertura delle principali attivit\u00E0 di controllo ufficiale per la sicurezza degli alimenti, con particolare riferimento alle fasi della trasformazione, distribuzione, somministrazione degli alimenti")
const p14c= new SubcategoryIndex("P14C", "Indicatore composito sugli stili di vita")
const p15ca= new SubcategoryIndex("P15Ca", "Proporzione di persone che hanno effettuato test di screening di primo livello, in un programma organizzato, per cervice uterina")
const p15cb= new SubcategoryIndex("P15Cb", "Proporzione di persone che hanno effettuato test di screening di primo livello, in un programma organizzato, per mammella")
const p15cc= new SubcategoryIndex("P15Cc", "Proporzione di persone che hanno effettuato test di screening di primo livello, in un programma organizzato, per colon retto")
const p16c= new SubcategoryIndex("P16C", "Proporzione di cancri in stadio II+ rilevati dai programmi di screening per il tumore della mammella (cancri screen-detected) ai round successivi a quello di prevalenza")

//Contesto ed Equità
const co01 = new SubcategoryIndex("CO01", "Buona salute percepita");
const co04 = new SubcategoryIndex("CO04", "Indice di cronicit\u00E0");
const eo01 = new SubcategoryIndex("EO01", "Rinuncia a prestazioni sanitarie per inappropriatezza organizzativa nell’offerta dei servizi e/o per ragioni economiche");
const co03 = new SubcategoryIndex("CO03", "Fragilit\u00E0 nell’anziano (65 anni o pi\u00F9)");
const co02 = new SubcategoryIndex("Sovrappeso ed obesità nei bambini", "Prevalenza di bambini in sovrappeso (secondo i criteri IOTF-International Obesity Task Force, vedi sezione “valori soglia”). Prevalenza di bambini obesi (secondo i criteri IOTF- International Obesity Task Force, vedi sezione “valori soglia”)");

// Assistenza Ospedaliera
const h01z = new SubcategoryIndex("H01Z", "Tasso di ospedalizzazione (ordinario e diurno) standardizzato in rapporto alla popolazione residente");
const h02z = new SubcategoryIndex("H02Z", "Quota di interventi per tumore maligno della mammella eseguiti in reparti con volume di attività superiore a 150 (con 10% tolleranza) interventi annui");
const h04z = new SubcategoryIndex("H04Z", "Rapporto tra ricoveri attribuiti a DRG ad alto rischio di inappropriatezza (Allegato B Patto per la Salute 2010-2012) e ricoveri attribuiti a DRG non a rischio di inappropriatezza in regime ordinario");
const h05z = new SubcategoryIndex("H05Z", "Proporzione di colecistectomie laparoscopiche con degenza post-operatoria inferiore a 3 giorni");
const h06z = new SubcategoryIndex("H06Z", "Tasso di ricovero diurno di tipo medico-diagnostico in rapporto alla popolazione residente");
const h07z = new SubcategoryIndex("H07Z", "Tasso di accessi in ricoveri day hospital di tipo medico (standardizzato per età) in rapporto alla popolazione residente");
const h09zc = new SubcategoryIndex("H09Zc", "Morti encefaliche in rapporto ai decessi per cerebrolesione acuta in rianimazione");
const h12c = new SubcategoryIndex("H12C", "Percentuale di pazienti che effettuano almeno un ricovero ripetuto entro 30 giorni con la stessa MDC");
const h14c = new SubcategoryIndex("H14C", "Percentuale di ricoveri di riabilitazione post-acuti inappropriati dal punto vista clinico");
const h13c = new SubcategoryIndex("H13C", "Percentuale di pazienti di età 65+ con diagnosi di frattura del collo del femore operati entro 2 giorni in regime ordinario");
const h15s = new SubcategoryIndex("H15S", "Frequenza di embolie polmonari o DVT post-chirurgiche");
const h16s = new SubcategoryIndex("H16S", "Frequenza di infezioni post-chirurgiche");
const h22C = new SubcategoryIndex("H22C", "Mortalità a 30 giorni dall’intervento di bypass isolato aorto-coronarico (BPAC)");
const h23c = new SubcategoryIndex("H23C", "Mortalità a 30 giorni dal primo ricovero per ictus ischemico");
const h24c = new SubcategoryIndex("H24C", "Mortalità a 30 giorni dal ricovero per broncopneumopatia cronica ostruttiva (BPCO) riacutizzata");
const h03c = new SubcategoryIndex("H03C", "Proporzione di nuovo intervento di resezione entro 120 giorni da un intervento chirurgico conservativo per tumore maligno della mammella");
const h08za = new SubcategoryIndex("H08Za", "Indicatori (a rotazione) che misurano sia la capacit\u00E0 di garantire i prodotti “driver” (globuli rossi) e il plasma da destinare alla lavorazione industriale adeguata a garantire la produzione di farmaci plasmaderivati rispondenti ai fabbisogni effettivi, che l’ottimizzazione dell'impiego della risorsa sangue, con riduzione del ricorso alla trasfusione allogenica e all’autotrasfusione, come misure del grado di implementazione di programmi di Patient Blood Management (PBM) e gestione scorte di emocomponenti");
const h08zb = new SubcategoryIndex("H08Zb", "Indicatori (a rotazione) che misurano sia la capacit\u00E0 di garantire i prodotti “driver” (globuli rossi) e il plasma da destinare alla lavorazione industriale adeguata a garantire la produzione di farmaci plasmaderivati rispondenti ai fabbisogni effettivi, che l’ottimizzazione dell'impiego della risorsa sangue, con riduzione del ricorso alla trasfusione allogenica e all’autotrasfusione, come misure del grado di implementazione di programmi di Patient Blood Management (PBM) e gestione scorte di emocomponenti");
const h09za = new SubcategoryIndex("H09Za", "Donazioni di organi (gruppo di indicatori (calcolati a rotazione) che esprimono la capacit\u00E0 organizzativa delle strutture ospedaliere di assicurare il processo di donazione di organi, quali prerequisiti per l’esecuzione dei trapianti di organi)");
const h09zb = new SubcategoryIndex("H09Zb", "Accertamenti di morte con criteri neurologici");
const h10za = new SubcategoryIndex("H10Za", "Numero pazienti in lista di attesa per trapianto per milione di popolazione della regione di residenza");
const h10zb = new SubcategoryIndex("H10Zb", "Tempo medio di attesa di trapianto per organo");
const h10zc = new SubcategoryIndex("H10Zc", "Numero dei pazienti trapiantati per organo");
const h11za = new SubcategoryIndex("H11Za", "Numero di donatori di tessuti per singola tipologia di tessuto/numero di accertamenti di morte con segni cardiaci o neurologici");
const h11z = new SubcategoryIndex("H11Z", "Numero di donatori di tessuti per tipologia di tessuto/numero di decessi in ospedale per Regione");
const h17c = new SubcategoryIndex("H17C", "Percentuale parti cesarei primari in maternit\u00E0 di I livello o comunque con <1.000 parti");
const h18c = new SubcategoryIndex("H18C", "Percentuale parti cesarei primari in maternit\u00E0 di II livello o comunque con ≥ 1.000 parti");
const h19s = new SubcategoryIndex("H19S", "Percentuale di parti fortemente pretermine (22-31 settimane di gestazione) avvenuti in punti nascita senza UTIN");
const h20s = new SubcategoryIndex("H20S", "Percentuale dei parti pretermine tardivi (34-36 settimane di gestazione)");
const h21s = new SubcategoryIndex("H21S", "Numero di punti nascita attivi con volumi <500 parti/anno, per i quali, secondo i dati forniti dal Comitato Percorso nascita nazionale, non \u00E8 stata chiesta deroga alla chiusura");

Vue.prototype.$submenusdata.set("SIO, Anagrafe tributaria" , [d01c,d02c]);
Vue.prototype.$submenusdata.set("CEDAP" , [d19c]);
Vue.prototype.$submenusdata.set("Sistema ADT" , [d03c,d04c]);
Vue.prototype.$submenusdata.set("Pronto soccorso" , [d05c,d06c,d07ca,d07cb,d08c,d09z]);
Vue.prototype.$submenusdata.set("Farmacia" , [d14c,d15c,d16c,d17c,d18c]);
Vue.prototype.$submenusdata.set("SIAD" , [d20z,d21z,d22z,d23z]);
Vue.prototype.$submenusdata.set("ISTAT - Modello D12" , [d24c,d25c]);
Vue.prototype.$submenusdata.set("ADT, Flussi SDO" , [d26c,d27c,d28c,d29c]);
Vue.prototype.$submenusdata.set("Hospice" , [d30z,d31c,d32z,d33za,d33zb]);
////Prevenzione Collettiva e Sanit� pubblica
Vue.prototype.$submenusdata.set("Anagrafe Vaccinale" , [p01c, p02c, p03c, p04c, p05c, p06c]);
Vue.prototype.$submenusdata.set("INAIL, ISTAT e INPS" , [p07ca,p07cb]);
Vue.prototype.$submenusdata.set("Piano Regionale per la Prevenzione" , [p08z]);
Vue.prototype.$submenusdata.set("Piattaforma VETINFO" , [p09z,p10z,p11z]);
Vue.prototype.$submenusdata.set("NSIS - PNR" , [p12z]);
Vue.prototype.$submenusdata.set("Banca dati CROGM - NSIS vigilanza alimenti" , [p13z]);
Vue.prototype.$submenusdata.set("ISTAT - PASSI" , [p14c]);
Vue.prototype.$submenusdata.set("Sistema Informativo screening" , [p15ca,p15cb,p15cc,p16c]);

//Contesto ed Equità
Vue.prototype.$submenusdata.set("Indagine ISTAT" , [co01,co04, eo01]);
Vue.prototype.$submenusdata.set("OKkio alla SALUTE" , [co02]);
Vue.prototype.$submenusdata.set("Passi d’Argento (PdA)" , [co03]);

// Assistenza Ospedaliera
Vue.prototype.$submenusdata.set("SDO" , [h01z,h02z,h04z,h05z,h06z,h07z,h09zc,h12c,h14c,h13c,h15s,h16s,h22C,h23c,h24c]);
Vue.prototype.$submenusdata.set("Blocco Operatorio" , [h03c]);
Vue.prototype.$submenusdata.set("Trasfusionale" , [h08za,h08zb]);
Vue.prototype.$submenusdata.set("Centro Regionale Trapianti" , [h09za,h09zb,h10za,h10zb,h10zc,h11za,h11z]);
Vue.prototype.$submenusdata.set("SIO" , [h17c,h18c]);
Vue.prototype.$submenusdata.set("CEDAP" , [h19s,h20s,h21s]);

axios.get("config.json").then((response) => {
  Vue.prototype.$config = response.data
  new Vue({
    vuetify,
    router,
    render: (h) => h(App)
  }).$mount("#app")
});
Vue.config.productionTip = false
Vue.mixin({
  data: function() {
    return {
      get token() {
        return localStorage.getItem('token');
      },      
    };
  }
});

