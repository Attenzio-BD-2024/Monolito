import { Dashboard, Register, Profile, Login } from './pages/_index';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';

export const routes = [
  { path: '/', component: Dashboard, layout: MainLayout, authRequired: true },
  { path: '/profile', component: Profile, layout: MainLayout, authRequired: true },
  { path: '/login', component: Login, layout: LoginLayout, authRequired: false },
  { path: '/register', component: Register, layout: LoginLayout, authRequired: false },
];