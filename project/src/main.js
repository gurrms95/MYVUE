import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './mixins'
import store from './store'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const i18nStrings = {en,ko}

createApp(App)
    .use(store)
    .mixin(mixin)
    .use(router)
    .use(i18nPlugin,i18nStrings)
    .directive('focus',{
        mounted(el, binding) {
            console.log(el);
            console.log(binding);
            el.focus();
        }
    })
    .directive('lowercase',{
        mounted(el){
            el.addEventListener('input',(event)=>{
                event.target.value = event.target.value.toLowerCase()
            })
        }
    })
    .directive('uppercase',{
        mounted(el){
            el.addEventListener('input',(event)=>{
                event.target.value = event.target.value.toUpperCase()
            })
        }
    })
    .directive('number',{
        mounted(el){
            el.addEventListener('input',(event)=>{
                event.target.value = event.target.value.replace(/\D/g,'')
            })
        }
    })
    .directive('korean',{
        mounted(el){
            el.addEventListener('input',(event)=>{
                event.target.value = event.target.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'')
            })
        }
    })
    .mount('#app')
