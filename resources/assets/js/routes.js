import VueRouter from 'vue-router';
import Home from './components/home.vue';
import Login from './components/auth/login.vue';
import TermsOfService from './components/terms-of-service.vue';
import PrivacyPolicy from './components/privacy-policy.vue';
import About from './components/about.vue';
import Organizers from './components/organizers.vue';
import CodeOfConduct from './components/code-of-conduct.vue';
import CocReport from './components/report.vue';
import Nashville from './components/nashville.vue';
import Speakers from './components/speakers.vue';
import Sponsors from './components/sponsors.vue';
import EmailSignups from './components/admin/signups.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/terms-of-service',
    component: TermsOfService,
    name: 'TermsOfService',
  },
  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
    name: 'PrivacyPolicy',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
  {
    path: '/about/organizers',
    component: Organizers,
    name: 'Organizers',
  },
  {
    path: '/code-of-conduct',
    component: CodeOfConduct,
    name: 'CodeOfConduct',
  },
  {
    path: '/code-of-conduct/report',
    component: CocReport,
    name: 'CocReport',
  },
  {
    path: '/nashville',
    component: Nashville,
    name: 'Nashville',
  },
  {
    path: '/speakers',
    component: Speakers,
    name: 'Speakers',
  },
  {
      path: '/sponsors',
      component: Sponsors,
      name: 'Sponsors',
  },
  {
    path: '/admin/emails',
    component: EmailSignups,
    name: 'EmailSignups',
  }
];

export default new VueRouter({
  routes,
});