import M2BackTop from './m2-back-top'
import M2NavBar from './m2-nav-bar'
import M2TabBar from './m2-tab-bar'
import M2TabBarItem from './m2-tab-bar-item'
import M2SmartRoute from './m2-smart-route'
import M2Scroll from './m2-scroll'
import M2Swiper from './m2-swiper'
import M2SwiperItem from './m2-swiper-item'
import M2Loading from './m2-loading'
import M2Toast from './m2-toast'

const components = [
  M2BackTop,
  M2NavBar,
  M2TabBar,
  M2TabBarItem,
  M2SmartRoute,
  M2Scroll,
  M2Swiper,
  M2SwiperItem
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (Vue, opts = {}) => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))

  // Vue.use(Loading.directive)

  // Vue.prototype.$loading = Loading.service
  Vue.prototype.$loading = M2Loading
  Vue.prototype.$loading.hide = M2Loading.hide
  Vue.prototype.$toast = M2Toast
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  M2BackTop,
  M2NavBar,
  M2TabBar,
  M2TabBarItem,
  M2SmartRoute,
  M2Scroll,
  M2Swiper,
  M2SwiperItem,
  M2Loading,
  M2Toast
}
