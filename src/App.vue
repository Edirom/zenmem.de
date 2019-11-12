<template>
  <div id="app">
    <header id="nav" class="navbar">
      <section class="navbar-section">
        <router-link id="home" to="/"><img src="./assets/pix/ZenMEM_white.png" alt="ZenMEM"></router-link>
      </section>
      <section class="navbar-section">
        <router-link to="/about">{{ $t('about') }}</router-link>
        <router-link to="/contact">{{ $t('contact') }}</router-link>
      </section>
      <section class="navbar-section">
        <div class="input-group input-inline">
          <input class="form-input" type="text" :placeholder="$t('search')">
          <button class="btn btn-primary input-group-btn">{{ $t('search') }}</button>
        </div>
        <div id="flags" class="input-group input-inline">
          <button v-if="!isLocale('de')" class="btn btn-primary" key="de" @click="changeLocale('de')">
            <flag iso="de" v-bind:squared=false />
          </button>
          <button v-if="!isLocale('en')" class="btn btn-primary" key="en" @click="changeLocale('en')">
            <flag iso="us" v-bind:squared=false />
          </button>
        </div>
      </section>
    </header>
    <router-view/>
    <footer id="footer">
      <div class="footer-third">
        <div class="footer-links">
          <router-link to="/imprint">{{ $t('imprint') }}</router-link>
          <router-link to="/about">{{ $t('about') }}</router-link>
          <router-link to="/contact">{{ $t('contact') }}</router-link>
        </div>
        <div class="footer-zenmem"><router-link to="/home">{{ $t('ZenMEM_abbr') }}<br/>{{ $t('ZenMEM') }}</router-link></div>
      </div>
      <div class="footer-third">
        <a href="https://edirom.de" target="_blank"><img id="footer-vife" src="./assets/pix/ViFE-logo-969x510-trans.png" :alt="$t('ViFE')"/></a>
      </div>
      <div class="footer-third">
        <a href="https://uni-paderborn.de" target="_blank"><img id="footer-upb" src="./assets/pix/upb-logo_rgb.png" :alt="$t('UPB')"/></a>
      </div>
    </footer>
  </div>
</template>

<script>
  import i18n from '@/plugins/i18n';

  export default {
    methods: {
      changeLocale: function(locale) {
        i18n.locale = locale;
        this.$store.dispatch('language/setLanguage', locale);
      },
      isLocale: function(locale) {
        return i18n.locale === locale;
      }
    }
  }

</script>

<style>

@import "assets/spectre/spectre.min.css";
@import "assets/spectre/spectre-exp.min.css";
@import "assets/spectre/spectre-icons.min.css";

#app {
}

a, a:hover, a:visited {
  color: #335480;
}

header {
  padding: .7rem .5rem .3rem;
  background-color: #335480;
}

footer {
  margin-top: 2rem;
  padding-top: 1rem;
  height: 6rem;
  font-size: 0.7rem;
  background-color: #f3f3f3;
}

footer .footer-third {
  width: 33.3%;
  float: left;
  text-align: center;
}

footer .footer-third:first-child {
  text-align: left;
  padding-left: 2rem;
}

footer .footer-third:last-child {
  text-align: right;
  padding-right: 2rem;
}

#footer-vife {
  height: 4.5rem;
}

#footer-upb {
  height: 3.5rem;
  margin-top: 0.6rem;
}

footer .footer-links {
  margin: 0.5rem;
}

footer .footer-links a {
  padding-right: 2rem;
}

footer .footer-zenmem {
  margin: 0.5rem;
}

#home {
  margin: .1rem;
}

#home img {
  height: 3.8rem;
}

#nav .btn.btn-primary {
  background: #B3D4FF;
  border-color: #B3D4FF;
  color: #335480;
}

#nav a {
  color: #fff;
  padding-right: 1.5rem;
}

#nav a:focus {
  box-shadow: none;
}

#nav a:hover {
  color: #ccc;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ccc;
}

  #flags {
    margin-left: 1rem;
  }
</style>
