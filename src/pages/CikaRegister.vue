<template>
  <div class="container">
    <div class="left">
      <img
        :src="require('@/assets/login.png')"
        alt="Image 1"
        class="image"
      />
    </div>
    <div class="right">
      <div v-if="!showRegister">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="name">Nama</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group">
            <label for="no_telepon">No Telepon</label>
            <input
              type="text"
              id="no_telepon"
              v-model="no_telepon"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="registerEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="registerPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div v-if="showRegister">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Masuk</button>
        </form>
        <p>
          Belum punya akun?
          <a href="#" @click="showRegister = false">Daftar dulu</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showRegister: false,
      name: "",
      username: "",
      no_telepon: "",
      registerEmail: "",
      registerPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
    handleRegister() {
      // Handle register logic here
      console.log("Nama:", this.name);
      console.log("Username:", this.username);
      console.log("No Telepon:", this.no_telepon);
      console.log("Email:", this.registerEmail);
      console.log("Password:", this.registerPassword);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.left {
  background-color: #ccc;
  border-radius: 0% 20% 20% 0%;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image {
  width: 50%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.right {
  width: 40%;
  padding: 55px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
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
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

p {
  text-align: center;
  margin-top: 20px;
}

a {
  color: #4f95ff;
  text-decoration: none;
}
</style>
