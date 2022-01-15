import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)

import AppHeader from '@/components/AppHeader'
import UiPlaceholderBlock from '@/components/ui/UiPlaceholderBlock'
import UiEmptyState from '@/components/ui/UiEmptyState'
import UiErrorState from '@/components/ui/UiErrorState'
import UiModal from '@/components/ui/UiModal'

app.component('AppHeader', AppHeader)
app.component('UiPlaceholderBlock', UiPlaceholderBlock)
app.component('UiEmptyState', UiEmptyState)
app.component('UiErrorState', UiErrorState)
app.component('UiModal', UiModal)

import VueSvgInlinePlugin from 'vue-svg-inline-plugin'
app.use(VueSvgInlinePlugin, {
  attributes: {
    add: [
      {
        name: 'tabindex',
        value: '',
      },
    ],
    data: ['src'],
    remove: ['alt'],
  },
})

app.mount('#app')
