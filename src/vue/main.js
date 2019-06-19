import Vue from 'vue'
import App from './index.vue'


export function initVue(){
    new Vue({
        el: '#app',
        render: h => h(App)
      });
}