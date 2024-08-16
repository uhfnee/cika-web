import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import halaman
import CikaHome from './pages/CikaHome.vue';
import CikaLogin from './pages/CikaLogin.vue';
import CikaRegister from './pages/CikaRegister.vue';
import CikaKategori from './pages/CikaKategori.vue';
import CikaInbox from './pages/CikaInbox.vue';
import CikaProfile from './pages/CikaProfile.vue';
import CikaRiwayat from './pages/CikaRiwayat.vue';
import KecelakaanBencana from './pages/KecelakaanBencana.vue';
import KesehatanPendidikan from './pages/KesehatanPendidikan.vue';
import PantiAsuhan from './pages/PantiAsuhan.vue';
import FullKategori from './pages/FullKategori.vue';
import CikaDetails from './pages/CikaDetails.vue';
import GalangDana from './pages/GalangDana.vue';
import ChangePassword from './pages/ChangePassword.vue';
import ForgotPass from './pages/ForgotPass.vue'

// Definisikan rute
const routes = [
  { path: '/CikaHome', component: CikaHome },
  { path: '/CikaLogin', component: CikaLogin },
  { path: '/CikaRegister', component: CikaRegister },
  { path: '/CikaKategori', component: CikaKategori },
  { path: '/CikaInbox', component: CikaInbox },
  { path: '/CikaProfile', component: CikaProfile },
  { path: '/CikaRiwayat', component: CikaRiwayat },
  { path: '/KecelakaanBencana', component: KecelakaanBencana },
  { path: '/KesehatanPendidikan', component: KesehatanPendidikan },
  { path: '/PantiAsuhan', component: PantiAsuhan },
  { path: '/FullKategori', component: FullKategori },
  { path: '/CikaDetails', component: CikaDetails },
  { path: '/GalangDana', component: GalangDana },
  { path: '/ChangePassword', component: ChangePassword},
  { path: '/ForgotPass', component: ForgotPass}

];

// Buat router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Buat aplikasi Vue
const app = createApp(App);

// Gunakan router
app.use(router);

// Mount aplikasi
app.mount('#app');
