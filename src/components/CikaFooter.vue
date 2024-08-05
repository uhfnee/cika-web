<template>
  <div class="Footer">
    <div class="container">
      <div class="footer-title">
        <img :src="logoSrc" :alt="logoAlt" />
        <div class="title-group">
          <p class="title">CiKa</p>
          <p class="sub-title">Cinta Kasih</p>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-1">
          <p>Quick Links</p>
          <ul>
            <li><router-link to="/CikaKategori">Donasi Kecelakaan dan Bencana</router-link></li>
            <li><router-link to="/CikaKategori">Donasi Kesehatan dan Pendidikan</router-link></li>
            <li><router-link to="/CikaKategori">Donasi Panti Asuhan</router-link></li>
          </ul>
        </div>
        <div class="footer-col-2">
          <p>Contact Us</p>
          <ul>
            <li><a :href="contactLinks.whatsapp" target="_blank">WhatsApp</a></li>
            <li><a :href="contactLinks.instagram" target="_blank">Instagram</a></li>
            <li><a :href="contactLinks.email" target="_blank">Email</a></li>
          </ul>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.077841392552!2d107.70031182343777!3d-6.960692065855077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9ec7f7ac5bd%3A0x64fa19f2732b39e4!2sPT.%20Cahaya%20Acitya%20Indonesia%20(Codelite)!5e0!3m2!1sid!2sid!4v1721374703464!5m2!1sid!2sid" width="400vw" height="132vw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p class="cr">Copyright © 2024 codelite</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CikaFooter',
  data() {
    return {
      logoSrc: require('@/assets/logo_cika.png'),
      logoAlt: 'logo_cf',
      contactLinks: {
        whatsapp: 'https://wa.me/1234567890', // Ganti dengan nomor WhatsApp Anda
        instagram: 'https://instagram.com/yourprofile', // Ganti dengan URL Instagram Anda
        email: 'mailto:contact@yourdomain.com' // Ganti dengan email Anda
      }
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap');

.container {
  background-color: #5B5B5B;
  padding: 20px;
  padding-bottom: 50px;
}

.footer-title {
  display: flex;
  align-items: center;
  margin-left: 2vw;
}

.title-group {
  display: flex;
  flex-direction: column;
  margin-left: 0vw;
  margin-top: -1.8vw;
}
.title {
  font-family: 'Arial Rounded MT Bold', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: white;
}

.sub-title {
  font-family: 'Arial Rounded MT Bold', sans-serif;
  font-weight: 400;
  color: white;
  margin-top: -1.9vw;
}
.footer-title img {
  width: 4.8vw;
}
.footer-col {
  font-family: Raleway;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 1vw;
}

.footer-col p {
  font-size: 30px;
  color: white;
}

.footer-col-1 {
  margin-top: -3vw;
  margin-left: 2vw;
  width: 20vw;
}

.footer-col-2 {
  margin-top: -3vw;
  margin-left: 11vw;
  width: 20vw;
}
iframe {
  margin-left: 20vw;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 8px 0;
}

a {
  color: #ffffff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.cr{
  color: #ffffff;
  padding-left: 80vw;
  margin-top: -1vw;
}
</style>