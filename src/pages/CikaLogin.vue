<template>
  <div class="container">
    <div class="left">
      <button class="back-button" @click="goBack">←</button>
      <img :src="require('@/assets/login.png')" alt="Image 1" class="image" />
    </div>
    <div class="right">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="email..."
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="password..."
            required
          />
          <router-link
            to="/CikaRegister"
            class="forgot-password"
          >lupa password</router-link>
        </div>
        <button type="submit">Masuk</button>
      </form>
      <p class="p2">
        Belum punya akun?
        <router-link to="/CikaRegister">Daftar dulu</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CikaLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap");
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
  font-family: "Arial Rounded MT Bold", sans-serif;
}
.left {
  background-color: #ffffff;
  border-radius: 0% 20% 20% 0%;
  padding-top: 5%;
  width: 50%;
  height: 90vh;
  position: relative;
}

.back-button {
  color: #000000;
  position: relative;
  bottom: 7%;
  right: 35%;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.image {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: auto;
}

.right {
  width: 40%;
  padding: 55px;
  border-radius: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  margin-right: 50vw;
}

.form-group {
  margin-bottom: 15px;
  padding: 2.5px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 20%;
  padding: 10px;
  margin-left: 15.5vw;
  margin-top: 5px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.forgot-password {
  bottom: -20px;
  font-size: 13px;
  color: brown;
}

.p2 {
  margin-left: 13vw;
}

a {
  color: #4f95ff;
  text-decoration: none;
}
</style>