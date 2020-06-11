import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from '@prismicio/vue'
import linkResolver from './prismic/link-resolver'

Vue.config.productionTip = false

	
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver: linkResolver
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')  
