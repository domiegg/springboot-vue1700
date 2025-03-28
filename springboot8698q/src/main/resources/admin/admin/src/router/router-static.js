import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import baodaoliucheng from '@/views/modules/baodaoliucheng/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import banjifenpei from '@/views/modules/banjifenpei/list'
    import sushefenpei from '@/views/modules/sushefenpei/list'
    import xueshengxinxi from '@/views/modules/xueshengxinxi/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import xueshengbaodao from '@/views/modules/xueshengbaodao/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '校园公告',
        component: news
      }
      ,{
	path: '/baodaoliucheng',
        name: '报道流程',
        component: baodaoliucheng
      }
      ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/banjifenpei',
        name: '班级分配',
        component: banjifenpei
      }
      ,{
	path: '/sushefenpei',
        name: '宿舍分配',
        component: sushefenpei
      }
      ,{
	path: '/xueshengxinxi',
        name: '学生信息',
        component: xueshengxinxi
      }
      ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
      ,{
	path: '/xueshengbaodao',
        name: '学生报到',
        component: xueshengbaodao
      }
      ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
