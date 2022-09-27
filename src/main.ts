import { createApp } from 'vue'
import './styles/UI.scss'
import './style.css'

import App from './App.vue'
import { TroisJSVuePlugin } from 'troisjs';
import components from "./components/UI"
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)

components.forEach((component) => {
	app.component(component.name, component)
})
app.use(pinia).use(TroisJSVuePlugin).mount('#app')
