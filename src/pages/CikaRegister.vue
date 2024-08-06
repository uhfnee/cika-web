<template>
  <div class="container">
    
    <div class="right">
      <div v-if="!showRegister">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="name"></label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Nama..."
              required
            />
          </div>
          <div class="form-group">
            <label for="username"></label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="username..."
              required
            />
          </div>
          <div class="form-group">
            <label for="no_telepon"></label>
            <input
              type="text"
              id="no_telepon"
              v-model="no_telepon"
              placeholder="no telepon..."
              required
            />
          </div>
          <div class="form-group">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              v-model="registerEmail"
              placeholder="email..."
              required
            />
          </div>
          <div class="form-group">
            <label for="password"></label>
            <input
              type="password"
              id="password"
              v-model="registerPassword"
              placeholder="password..."
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
    <div class="left">
      <img
        :src="require('@/assets/login.png')"
        alt="Image 1"
        class="image"
      />
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
@import url('https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap');
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #eeee;
}

.left {
  background-color: #ffffff;
  border-radius: 20% 0% 0% 20%;
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
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
  margin-right: 50vw;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
  padding: 3px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 10px;
  border: 1px solid #B9B9B9;
  background-color: #B9B9B9; 
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

button {
  width: 20%;
  padding: 10px;
  margin-left: 15.5vw;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

p {
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

a {
  color: #4f95ff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
}
</style>