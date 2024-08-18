import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入wangeditor的css样式
import '@wangeditor/editor/dist/css/style.css'
const app = createApp(App)
app.use(ElementPlus);
app.use(router)

app.mount('#app')
