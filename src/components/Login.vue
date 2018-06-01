<template>
  <div class="login">
      <md-input-container class="language_select">
          <md-select name="language" id="language" v-model="language">
              <md-option  v-for="(language, code) in languageList" :value="code" :key="code">{{ language.title }}</md-option>
          </md-select>
      </md-input-container>
      <div class="site-branding container">
          <span class="custom-logo-link" rel="home" itemprop="url"><img  src="/static/img/adamant-logo-transparent-512x512.png" class="custom-logo" alt="ADAMANT" itemprop="logo"></span>				<span href="#">
					<span class="site-title" v-if="language=='ru'">
						АДАМАНТ					</span>
          <span class="site-title" v-else>
						ADAMANT					</span>
      </span>
          <p class="site-description">{{ $t('login.subheader') }}</p>
      </div>
      <md-layout md-align="center" md-gutter="16">
      <md-layout md-flex="66" md-flex-xsmall="80">
          <md-input-container class="password_input">
              <label style="text-align: center;width: 100%;">{{ $t('login.password_label') }}</label>
              <md-input v-model="passPhrase" type="password" autocomplete="new-password" @keyup.native="kp($event)"></md-input>
          </md-input-container>
      </md-layout>
          <md-layout md-flex="66" md-flex-xsmall="80">
              <md-layout md-align="center" md-gutter="16">
                  <md-button class="md-raised md-short" v-on:click="logme">{{ $t('login.login_button') }}</md-button>
              </md-layout>
          </md-layout>
          <md-layout md-flex="66" md-flex-xsmall="80" md-align="center">
            <md-button classs="md-short"
                      @click.prevent="scanQRCode">
              <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                  <g>
                    <path d="M226,0H15C6.716,0,0,6.716,0,15v211c0,8.284,6.716,15,15,15h211c8.284,0,15-6.716,15-15V15C241,6.716,234.284,0,226,0z
                       M211,211H30V30h181V211z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M497,0H286c-8.284,0-15,6.716-15,15v211c0,8.284,6.716,15,15,15h211c8.284,0,15-6.716,15-15V15C512,6.716,505.284,0,497,0
                      z M482,211H301V30h181V211z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M436,61h-90c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15h90c8.284,0,15-6.716,15-15V76
                      C451,67.716,444.284,61,436,61z M421,151h-60V91h60V151z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M166,61H76c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15h90c8.284,0,15-6.716,15-15V76
                      C181,67.716,174.284,61,166,61z M151,151H91V91h60V151z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M166,331H76c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15h90c8.284,0,15-6.716,15-15v-90
                      C181,337.716,174.284,331,166,331z M151,421H91v-60h60V421z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M226,271H15c-8.284,0-15,6.716-15,15v211c0,8.284,6.716,15,15,15h211c8.284,0,15-6.716,15-15V286
                      C241,277.716,234.284,271,226,271z M211,482H30V301h181V482z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M497,361c-8.284,0-15,6.716-15,15v45h-76c-8.284,0-15,6.716-15,15v46h-90v-46c0-8.284-6.716-15-15-15s-15,6.716-15,15v61
                      c0,8.284,6.716,15,15,15h120c8.284,0,15-6.716,15-15v-46h76c8.284,0,15-6.716,15-15v-60C512,367.716,505.284,361,497,361z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M376,271h-90c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15s15-6.716,15-15v-75h60v15c0,8.284,6.716,15,15,15
                      s15-6.716,15-15v-30C391,277.716,384.284,271,376,271z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M497,271h-61c-8.284,0-15,6.716-15,15v75.199l-74.999-0.003c-8.284,0-15,6.515-15,14.799c0,0.001,0,0.002,0,0.003
                      s0,0.002,0,0.003v60c0,8.284,6.716,15,15,15s15-6.716,15-15v-45.004L435.999,391c3.979,0,7.794-1.581,10.607-4.393
                      C449.419,383.794,451,379.979,451,376v-75h46c8.284,0,15-6.716,15-15S505.284,271,497,271z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M497,482h-31c-8.284,0-15,6.716-15,15s6.716,15,15,15h31c8.284,0,15-6.716,15-15S505.284,482,497,482z"/>
                  </g>
                </g>
                </svg>

            </md-button>
          </md-layout>
          <md-layout md-flex="66" md-flex-xsmall="80" style="margin-top:30px">
              <md-layout md-align="center" md-gutter="16">
                  <p style="font-weight: 300;margin-bottom: 10px;">{{$t('login.create_address_label')}}</p>
              </md-layout>
          </md-layout>
          <md-layout md-flex="66" md-flex-xsmall="80" style="">
              <md-layout md-align="center" md-gutter="16">
                  <a class='create_link' v-on:click="showCreate = true; scrollToBottom()">{{ $t('login.new_button') }}</a>
              </md-layout>
          </md-layout>
    </md-layout>
      <md-layout v-if="showCreate" md-align="center" md-gutter="16">
          <md-layout md-flex="66" md-flex-xsmall="90" class="newpass_field">

              <md-input-container>
                  <label v-html="$t('login.new_password_label')"></label>
                  <md-textarea v-bind:value="yourPassPhrase" readonly></md-textarea>
                  <md-icon v-clipboard="yourPassPhrase"  @success="copySuccess" style="cursor:pointer;z-index:20;" :title="$t('login.copy_button_tooltip')">content_copy</md-icon>
                  <md-icon v-if=!iOS v-on:click.native="saveFile" style="cursor:pointer;z-index:20;" :title="$t('login.save_button_tooltip')">archive</md-icon>

              </md-input-container>

          </md-layout>
      </md-layout>

      <md-snackbar md-position="bottom center" md-accent ref="snackbar" md-duration="2000">
          <span>{{ $t('login.invalid_passphrase') }}</span>
      </md-snackbar>
      <md-snackbar md-position="bottom center" md-accent ref="loginSnackbar" md-duration="2000">
          <span>{{ $t('home.copied') }}</span>
      </md-snackbar>
  </div>

</template>

<script>
export default {
  name: 'login',
  methods: {
    scrollToBottom: function () {
      this.$root.$nextTick(function () {
        window.scrollTo(0, document.body.scrollHeight)
      })
    },
    copySuccess (e) {
      this.$refs.loginSnackbar.open()
    },
    kp: function (event) {
      if (event.key === 'Enter') {
        this.logme()
      }
    },
    snackOpen () {
      this.$refs.snackbar.open()
    },
    scanQRCode () {
      this.$router.push('/scan/')
    },
    logme () {
      this.passPhrase = this.passPhrase.toLowerCase().trim()
      if (this.passPhrase.split(' ').length !== 12) {
        this.snackOpen()
        return
      }
      var errorFunction = function () {
        this.snackOpen()
      }.bind(this)
      this.getAccountByPassPhrase(this.passPhrase, function (context) {
        this.$store.commit('save_passphrase', {'passPhrase': this.passPhrase})
        this.$root._router.push('/chats/')
        this.loadChats(true)
        this.$store.commit('stop_tracking_new')

        this.$store.dispatch('login', this.passPhrase)

        this.getStored('eth:address').then(address => {
          if (!address) this.storeValue('eth:address', this.$store.state.eth.address)
        })
      }, errorFunction)
    },
    'handleSuccess': function (e) {
      this.snackbar = true
    },
    saveFile () {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      if (!iOS) {
        this.download(this.yourPassPhrase, 'adm-' + btoa(new Date().getTime()).replace('==', '') + '.txt', 'text/plain')
      }
    },
    download (data, filename, type) {
      var file = new Blob([data], {type: type})
      if (window.navigator.msSaveOrOpenBlob) { // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename)
      } else { // Others
        var a = document.createElement('a')
        var url = URL.createObjectURL(file)
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        setTimeout(function () {
          document.body.removeChild(a)
          window.URL.revokeObjectURL(url)
        }, 0)
      }
    }
  },
  mounted: function () {
    if (this.$store.state.passPhrase) {
      this.$store.commit('leave_chat')
      this.$root._router.push('/chats/')
    }
  },
  computed: {
    iOS: function () {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    },
    languageList: function () {
      var messages = require('../i18n').default
      return messages
    },
    yourPassPhrase: function () {
      var Mnemonic = require('bitcore-mnemonic')
      return new Mnemonic(Mnemonic.Words.ENGLISH).toString()
    },
    qrCodePassPhrase: function () {
      return this.$store.state.passPhrase
    }
  },
  watch: {
    'language' (to, from) {
      this.$i18n.locale = to
      this.$store.commit('change_lang', to)
    }
  },
  data () {
    return {
      passPhrase: this.qrCodePassPhrase || '',
      language: this.$i18n.locale,
      showCreate: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.site-branding
{
    text-align: center;
    padding: 40px 0 40px;
}

.container {
    width: 800px;
    margin: 0 auto;
}
.container a{
    color: #000;
}
.md-layout .md-button.md-raised.md-short, .md-short {
    min-width: 126px;
}
.md-layout .md-button.md-raised.md-shit, .md-shit {
    background: repeating-linear-gradient( 140deg, lightgray, lightgray 1px, #FEFEFE 1px, #FEFEFE 15px );
    color: #4A4A4A;
}
.md-layout .md-button.md-raised.md-shit:hover,.md-shit:hover {
    background: none;
    background-color: rgba(0, 0, 0, 0.12);
}
p.site-description {
    font-family: 'Exo 2'!important;
    font-style: normal!important;
    font-weight: 100!important;
    margin: 10px 0;
    margin-top: 0px;
    padding: 0px 20px;
    font-size: 18px;
}

p.site-description {
    line-height: 20px;
}

p.site-description {
    color: #4a4a4a;
}

.site-title {
    color: #4a4a4a;
    line-height: 40px;
    font-family: 'Exo 2'!important;
    font-style: normal!important;
    font-weight: 100!important;
    font-size: 45px;
    display: inline-block;
    width: 100%;
    padding: 0px 10px;
    padding-bottom: 15px;
}
a.custom-logo-link {
    width: 100%;
    text-align: center;
    display: inline-block;
    margin-bottom: 10px;
    color: #000;
}

a.custom-logo-link img {
    height: auto;
    max-width: 100%
}
.newpass_field label {
    text-align: left;
    line-height: 18px;

}
.newpass_field {
    padding-top: 20px!important;
}
.newpass_field textarea {
    padding-top: 20px !important;
}

.custom-logo-link img {
    width: 301px;
    height: 301px;
}

.site-branding {
    padding: 66px 0 10px;
}
.newpass_field textarea{
    height: 90px!important;
    padding-top: 30px!important;
}
.newpass_field .md-icon{
    padding-top: 40px;
}
@media (max-width: 1100px) {
    .container {
        width: 95%;
        margin: 0 auto;
    }
}
@media (max-width: 991px) {
    .site-branding {
        padding: 61px 0 10px;
    }
    .container {
        width: 95%;
        margin: 0 auto;
    }
    .newpass_field textarea{
        height: 90px!important;
        padding-top: 30px!important;
    }
    .newpass_field .md-icon{
        padding-top: 40px;
    }
}
@media (max-width: 767px) {
    .container {
        width: 90%;
        margin: 0 auto;
    }
    p.site-description {
        font-size: 16px;
    }
    .site-title
    {
        font-size: 36px;

    }
    .newpass_field textarea{
        height: 100px!important;
        padding-top: 40px!important;
    }
    .newpass_field .md-icon{
        padding-top: 50px;
    }
}

@media (max-width: 600px) {
    .newpass_field textarea{
        height: 90px!important;
        padding-top: 30px!important;
    }
    .site-description {
        display:none;
    }
    .newpass_field .md-icon{
        padding-top: 30px;
    }
}
@media (max-width: 480px) {
    .newpass_field .md-icon{
        padding-top: 50px;
    }
    .custom-logo-link img {
        width: 213px;
        height: 213px;
    }

    .newpass_field textarea{
        height: 115px!important;
        padding-top: 50px!important;
    }
    .container {
        width: 95%;
    }
    .site-description {
        display:none;
    }
}



.language_select .md-select
{
    min-width:150px;
}

.language_select .md-select:not(.md-select-icon):after {
    left: 0;
    transform: translateY(-50%) rotateZ(270deg) scaleY(0.45) scaleX(0.85);
    right:auto;
}
.language_select.md-input-container:after {
    background-color: transparent;
}
.md-input-container.password_input {
    margin-bottom:10px;
}

.login .md-input-container.language_select .md-select .md-select-value {
    padding-right: 0px;
}


.md-input-container.language_select {
    position: absolute;
    right: 13px;
    top: 0;
    margin-top: 9px;
    padding-top: 0;
    width: auto;
    font-weight: 300;
    max-width: 120px;
    min-width: 70px;
}
.password_input input {
    text-align: center;
}
.login .md-input-container.language_select .md-select .md-select-value
{
    text-align: right;
}

.language_select .md-select .md-menu {

}
.md-input-container.language_select .md-select .md-select-value
{
    padding-right: 0px;
}
.md-input-container.language_select .md-select {
    min-width: 70px;
    max-width: 120px;
}
a.create_link {
   text-decoration: underline!important;
   color: #4a4a4a!important;
   font-weight: 500;
   cursor:pointer;
    font-size: 16px;
    font-family:  'Exo 2'!important;
    letter-spacing: 0;
    margin-bottom: 40px;
}
</style>
