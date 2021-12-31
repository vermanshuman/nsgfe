<template>
<v-app>
  <v-content class="login_wrp">
    <v-form>
    <v-img class="logo" width="75%" style="margin-left: 12.5%;" src="@/assets/image/logo_NSG.png"></v-img>
      <div class="error-box" v-if="error" ref="errorBox">
        <v-tooltip top max-width="380" v-if="isEllips">
          <template v-slot:activator="{on}">
          <span v-on="on">{{error}}</span>
          </template>
          <span v-if="isEllips">{{error}}</span>
        </v-tooltip>
        <span v-else>{{error}}</span>
      </div>
      <div :class="$v.username.$dirty && $v.username.$invalid ? 'v-form-input-group-after' : 'v-form-input-group' " >
          <div class="v-input__slot">          
            <div class="v-input__prepend-inner">
              <div class="v-input__icon v-input__icon--prepend-inner">
                <v-avatar class="filed_icon">
                    <img src="@/assets/image/user.png" alt="user"><img>
                </v-avatar>
              </div>
            </div>
          <div class="v-text-field__slot">
            <input id="input-944" type="text" v-model="username" placeholder="Username"  @input="removemesage" @keyup.enter="login">
          </div>
          </div>
          <div v-if="$v.username.$dirty && $v.username.$invalid" class="v-messages theme--light error--text" role="alert">
            <div class="v-messages__wrapper">
             <div class="v-messages__message message-box" v-if="$v.username.$dirty && $v.username.$invalid">Username obbligatoria</div>
          </div>
          </div>
        </div>
        <div  :class="$v.password.$dirty && $v.password.$invalid ? 'v-form-input-group-after' : 'v-form-input-group' ">
          <div class="v-input__slot">
            <div class="v-input__prepend-inner">
              <div class="v-input__icon v-input__icon--prepend-inner">
                <v-avatar class="filed_icon">
                    <img src="@/assets/image/password.png" alt="user"><img>
                </v-avatar>
              </div>
            </div>
            <div class="v-text-field__slot">
              <input id="input-944" type="password" v-model="password" placeholder="Password" @input="removemesage" @keyup.enter="login">
            </div>
          </div>
          <div v-if="$v.password.$dirty && $v.password.$invalid" class="v-messages theme--light error--text" role="alert">
            <div class="v-messages__wrapper">
              <div v-if="$v.password.$dirty && $v.password.$invalid" class="v-messages__message message-box">Password obbligatoria</div>
            </div>
          </div>
        </div>
        <v-checkbox dark label="Ricordami" class="Checkme" style="background:transparent !important;"></v-checkbox>
        
        <v-btn class="login_btn" @click="login">Accedi</v-btn>
        <a href="#" class="forgot_pass">Password dimenticata</a>
      </v-form>
  </v-content>
 
</v-app>
</template>
<style>
  body > div {
    height: 100vh;
  }
</style>
<script>
import { required } from "vuelidate/lib/validators";
import axios from 'axios'
export default{
  data(){
    return{
      username: null,
      password:null,
      error:null,
      isEllips:null,
    };
  },
  mounted() {    
    if(this.token){
      this.$router.push({ name: "home" });
    }
  },
  methods: {
     removemesage() {
      this.error = null;
    },
    login(){
      var self = this;
      this.$v.$touch();
      if(!this.$v.$invalid){
        this.error=null;
        axios
        .post(
            this.$config.API_URL+"login",
          {
          }, {
            auth: {
                username:this.username,
                password:this.password
            }
          }
        )
        .then(response => { 
          if(response.data=='' || response.data==null){
            this.error="Internal error.Please contact admin";
            return
          }      
          if (response.status === 200) {            
            localStorage.setItem("token",response.data.token);
            this.error=null;
            this.$router.push({ name: "home" });
          }       
        })
        .catch(error => {     
           this.spinner_loading = false;
           this.error=error.response.data.resultDescription;
           if(this.error=="Authentication failed for "+this.username) {
             this.error = "Autenticazione fallita per "+this.username+" - Controlla I dati inseriti";
           }
          setTimeout(function(){
            var element = self.$refs.errorBox;
            if(element.offsetHeight < element.scrollHeight){
              self.isEllips=true;
            }else{
              self.isEllips=false;
            }
          }, 200);
        });
      }
    }
  },
  validations: {
    username: {
      required
   },
    password: {
      required
    },
  }
}
</script>
