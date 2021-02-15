import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/User' },
    { path: '/count', component: '@/pages/counter/count' },
  ],
  fastRefresh: {},
});
