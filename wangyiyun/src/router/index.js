import Vue from 'vue';
import VueRouter from 'vue-router';
import RecommendView from '../views/RecommendView.vue';
import HotView from '../views/HotView.vue';
import SearchView from '../views/SearchView.vue';
import PlaylistDetail from '../views/PlaylistDetail.vue';
import SongDetail from '../views/SongDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'recommend',
    component: RecommendView,
    meta: { showNav: true },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  
  {
    path: '/hot',
    name: 'hot',
    component: HotView,
    meta: { showNav: true },
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: { showNav: true },
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: PlaylistDetail,
  },
  {
    path: "/song",
    name: "song",
    component: SongDetail,
  },
]

const router = new VueRouter({
  routes
})

export default router
