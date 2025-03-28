import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import baodaoliuchengList from '../pages/baodaoliucheng/list'
import baodaoliuchengDetail from '../pages/baodaoliucheng/detail'
import baodaoliuchengAdd from '../pages/baodaoliucheng/add'
import xueshengbaodaoList from '../pages/xueshengbaodao/list'
import xueshengbaodaoDetail from '../pages/xueshengbaodao/detail'
import xueshengbaodaoAdd from '../pages/xueshengbaodao/add'
import banjifenpeiList from '../pages/banjifenpei/list'
import banjifenpeiDetail from '../pages/banjifenpei/detail'
import banjifenpeiAdd from '../pages/banjifenpei/add'
import sushefenpeiList from '../pages/sushefenpei/list'
import sushefenpeiDetail from '../pages/sushefenpei/detail'
import sushefenpeiAdd from '../pages/sushefenpei/add'
import jiaofeixinxiList from '../pages/jiaofeixinxi/list'
import jiaofeixinxiDetail from '../pages/jiaofeixinxi/detail'
import jiaofeixinxiAdd from '../pages/jiaofeixinxi/add'
import xueshengxinxiList from '../pages/xueshengxinxi/list'
import xueshengxinxiDetail from '../pages/xueshengxinxi/detail'
import xueshengxinxiAdd from '../pages/xueshengxinxi/add'
import banjixinxiList from '../pages/banjixinxi/list'
import banjixinxiDetail from '../pages/banjixinxi/detail'
import banjixinxiAdd from '../pages/banjixinxi/add'
import sushexinxiList from '../pages/sushexinxi/list'
import sushexinxiDetail from '../pages/sushexinxi/detail'
import sushexinxiAdd from '../pages/sushexinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'baodaoliucheng',
					component: baodaoliuchengList
				},
				{
					path: 'baodaoliuchengDetail',
					component: baodaoliuchengDetail
				},
				{
					path: 'baodaoliuchengAdd',
					component: baodaoliuchengAdd
				},
				{
					path: 'xueshengbaodao',
					component: xueshengbaodaoList
				},
				{
					path: 'xueshengbaodaoDetail',
					component: xueshengbaodaoDetail
				},
				{
					path: 'xueshengbaodaoAdd',
					component: xueshengbaodaoAdd
				},
				{
					path: 'banjifenpei',
					component: banjifenpeiList
				},
				{
					path: 'banjifenpeiDetail',
					component: banjifenpeiDetail
				},
				{
					path: 'banjifenpeiAdd',
					component: banjifenpeiAdd
				},
				{
					path: 'sushefenpei',
					component: sushefenpeiList
				},
				{
					path: 'sushefenpeiDetail',
					component: sushefenpeiDetail
				},
				{
					path: 'sushefenpeiAdd',
					component: sushefenpeiAdd
				},
				{
					path: 'jiaofeixinxi',
					component: jiaofeixinxiList
				},
				{
					path: 'jiaofeixinxiDetail',
					component: jiaofeixinxiDetail
				},
				{
					path: 'jiaofeixinxiAdd',
					component: jiaofeixinxiAdd
				},
				{
					path: 'xueshengxinxi',
					component: xueshengxinxiList
				},
				{
					path: 'xueshengxinxiDetail',
					component: xueshengxinxiDetail
				},
				{
					path: 'xueshengxinxiAdd',
					component: xueshengxinxiAdd
				},
				{
					path: 'banjixinxi',
					component: banjixinxiList
				},
				{
					path: 'banjixinxiDetail',
					component: banjixinxiDetail
				},
				{
					path: 'banjixinxiAdd',
					component: banjixinxiAdd
				},
				{
					path: 'sushexinxi',
					component: sushexinxiList
				},
				{
					path: 'sushexinxiDetail',
					component: sushexinxiDetail
				},
				{
					path: 'sushexinxiAdd',
					component: sushexinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
