// 入口文件
import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import app from './App.vue'
import{header} from "mint-ui"
Vue.component(header.name,header)
var vm =new Vue({

el:'#app',
render:c=>c(app)


})