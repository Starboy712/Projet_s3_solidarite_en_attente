// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'


import '@/assets/css/typography.css'
import '@/assets/css/layout.css'
//import '@/assets/img/logo_brun_foncé.svg'

Vue.config.productionTip = true

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyATIywJVJiMuLmkXa7c55-pgwxvaR8TU_4',
    libraries: 'places',
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
