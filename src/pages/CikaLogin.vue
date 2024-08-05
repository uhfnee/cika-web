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
        <a href="#" @click="showRegister = true">Daftar dulu</a>
      </p>
      <div v-if="showRegister">
        <h2>Daftar</h2>
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
          <button type="submit">Daftar</button>
        </form>
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
  background-color: #f7f7f7; /* Ubah warna background menjadi abu-abu */
}
.left {
  background-color: #ccc;
  border-radius: 0% 20% 20% 0%;
  padding-top: 5%;
  width: 50%;
  height: 90vh;
  position: relative;
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
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
p {
  margin-left: 13.5vw;
}
a {
  margin-left: 0vw;
  color: #4f95ff;
  text-decoration: none;
}
</style>