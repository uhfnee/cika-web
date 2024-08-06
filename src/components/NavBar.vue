<template>
  <div class="navbar">
    <nav>
      <div class="brand">
        <img :src="logoSrc" :alt="logoAlt" />
        <span class="app-name">{{ appName }}</span>
      </div>
      <ul class="nav-list">
        <router-link to="/CikaHome" style="text-decoration: underline; color: inherit;"><li>Beranda</li></router-link>
        <router-link to="/CikaKategori" style="text-decoration: underline; color: inherit;"><li>Kategori</li></router-link>
        <router-link to="/CikaInbox" style="text-decoration: underline; color: inherit;"><li>Inbox</li></router-link>
        <router-link to="/CikaRiwayat" style="text-decoration: underline; color: inherit;"><li>Riwayat</li></router-link>
        <li>
          <router-link to="/FullKategori">
            <button class="btnDonate">Donate</button>
          </router-link>
        </li>
        <li>
          <router-link v-if="isLoggedIn" to="/CikaProfile">
            <button class="btnProfile">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8333 21.875C20.8333 20.4213 20.8333 19.6944 20.6539 19.103C20.2499 17.7713 19.2078 16.7292 17.8762 16.3252C17.2847 16.1458 16.5578 16.1458 15.1041 16.1458H9.8958C8.44208 16.1458 7.71522 16.1458 7.12377 16.3252C5.7921 16.7292 4.75 17.7713 4.34604 19.103C4.16663 19.6944 4.16663 20.4213 4.16663 21.875M17.1875 7.8125C17.1875 10.4013 15.0888 12.5 12.5 12.5C9.91112 12.5 7.81246 10.4013 7.81246 7.8125C7.81246 5.22367 9.91112 3.125 12.5 3.125C15.0888 3.125 17.1875 5.22367 17.1875 7.8125Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
          <router-link v-else to="/CikaLogin">
            <button class="btnProfile">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8333 21.875C20.8333 20.4213 20.8333 19.6944 20.6539 19.103C20.2499 17.7713 19.2078 16.7292 17.8762 16.3252C17.2847 16.1458 16.5578 16.1458 15.1041 16.1458H9.8958C8.44208 16.1458 7.71522 16.1458 7.12377 16.3252C5.7921 16.7292 4.75 17.7713 4.34604 19.103C4.16663 19.6944 4.16663 20.4213 4.16663 21.875M17.1875 7.8125C17.1875 10.4013 15.0888 12.5 12.5 12.5C9.91112 12.5 7.81246 10.4013 7.81246 7.8125C7.81246 5.22367 9.91112 3.125 12.5 3.125C15.0888 3.125 17.1875 5.22367 17.1875 7.8125Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logoSrc: require("@/assets/logo_cika.png"),
      logoAlt: "logo_ch",
      appName: "CiKa",
      isLoggedIn: false,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap");

body {
  font-family: "Arial Rounded MT Bold", sans-serif;
}

.navbar {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  width: 100vw;
  height: 3.5vw;
  font-family: "Arial Rounded MT Bold", sans-serif;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
}

.brand img {
  height: 40px;
  margin-right: 10px;
}

.app-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-right: 5vw;
}

.nav-list li {
  margin: 0 1rem;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
}
.nav-list > li > router-link { /* Higher specificity */
  text-decoration: none;
  color: inherit;
}


.btnDonate {
  width: 70px;
  height: 25px;
  color: white;
  background: #000000;
  border-radius: 5px;
  border: none;
}

.btnProfile {
  background: transparent;
  border: none;
}
</style>
