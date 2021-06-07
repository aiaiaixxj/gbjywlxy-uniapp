import Vue from 'vue'
import App from './App'
import axios from './utils/request/request.js'

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import {
	Button,
	Select,
	Row,
	Image,
	Input,
	Col
} from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
App.mpType = 'app'
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)
Vue.use(Image)
Vue.use(Input)
Vue.use(Col)
Vue.use(MintUI)

//Vue.use(ElementUI);
const app = new Vue({
	...App
})
app.$mount()
console.log("app=>", app)
