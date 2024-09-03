import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App)
app.component('BaseDialog', BaseDialog)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.mount('#app');
