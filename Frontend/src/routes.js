import { Dashboard, Profile, Login, Courses } from './pages/_index';
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';

export const routes = [
  { path: '/login', component: Login, layout: LoginLayout, authRequired: false },
  { path: '/', component: Dashboard, layout: MainLayout, authRequired: true },
  { path: '/profile', component: Profile, layout: MainLayout, authRequired: true },
  { path: '/courses', component: Courses, layout: MainLayout, authRequired: true },
];