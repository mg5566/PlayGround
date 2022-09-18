import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router';
import FetchPage from '@/pages/FetchPage.vue';
import AxiosPage from '@/pages/AxiosPage.vue';
import TanstackQueryPage from '@/pages/TanstackQueryPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: { path: '/fetch' } },
  { path: '/fetch', component: FetchPage },
  { path: '/axios', component: AxiosPage },
  { path: '/tanstack-query', component: TanstackQueryPage },
  // fallback page
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

export default index;