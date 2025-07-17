export default [
  {
    path: '/auth/signin',
    component: () => import('@/modules/auth/pages/signin.vue'),
    name: 'auth-signin',
  },
  {
    path: '/auth/signup',
    component: () => import('@/modules/auth/pages/signup.vue'),
    name: 'auth-signup',
  },
];
