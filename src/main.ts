import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CirclePlaceholder from './components/placeholders/CirclePlaceholder.vue'
import CircleLoader from './components/loaders/CircleLoader.vue'
import LinePlaceholder from "./components/placeholders/LinePlaceholder.vue"
import Margin from './components/layouts/Margin.vue'
import Padding from './components/layouts/Padding.vue'
import Divider from './components/layouts/Divider.vue'
import Stack from './components/layouts/Stack.vue'
import AbsoluteBox from './components/layouts/AbsoluteBox.vue'


Vue.component('CirclePlaceholder', CirclePlaceholder)
Vue.component('LinePlaceholder', LinePlaceholder)
Vue.component('CircleLoader', CircleLoader)
Vue.component('Margin', Margin)
Vue.component('Padding', Padding)
Vue.component('Divider', Divider)
Vue.component('Stack', Stack)
Vue.component('AbsoluteBox', AbsoluteBox)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
