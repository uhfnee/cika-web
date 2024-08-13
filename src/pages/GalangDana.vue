<template>
    <NavBar/>
    <div class="right">
      <h1>Galang Dana</h1>
      <h2>Pilih Kategori Galang Dana</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="kategori">Kategori Galang Dana:</label>
          <div class="checkbox-group">
            <input type="checkbox" id="kategori1" value="Kecelakaan Dan Bencana" v-model="categories" />
            <label for="kategori1">Donasi Kecelakaan Dan Bencana</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="kategori2" value="Kesehatan Dan Pendidikan" v-model="categories" />
            <label for="kategori2">Donasi Kesehatan Dan Pendidikan</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="kategori3" value="Panti Asuhan" v-model="categories" />
            <label for="kategori3">Donasi Panti Asuhan</label>
          </div>
        </div>
        <h2>Baca dan beri tanda syarat penggalangan di bawah ini</h2>
        <div class="form-group">
          <div class="checkbox-group">
            <input type="checkbox" id="syarat1" v-model="terms" />
            <label for="syarat1">Pemilik rekening bertanggung jawab atas penggunaan dana yang diterima dari galang dana ini.</label>
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="syarat2" v-model="terms" />
            <label for="syarat2">Kamu sebagai penggalang dana bertanggung jawab atas permintaan pencairan dan pelaporan penggunaan dana.</label>
          </div>
        </div>
        <h2>Data Diri</h2>
        <div class="form-group">
          <label for="nama"></label>
          <input type="text" id="nama" v-model="name" placeholder="Nama kamu sesuai KTP" required />
        </div>
        <div class="form-group">
          <label for="telepon"></label>
          <input type="text" id="telepon" v-model="telepon" placeholder="No telepon" required />
        </div>
        <div class="form-group">
          <label for="pekerjaan"></label>
          <input type="text" id="pekerjaan" v-model="pekerjaan" placeholder="Pekerjaan saat ini" required />
        </div>
        <div class="form-group">
          <label for="tempatKerja"></label>
          <input type="text" id="tempatKerja" v-model="tempatKerja" placeholder="Nama sekolah/tempat kerja" required />
        </div>
        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
    <CikaFooter />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import CikaFooter from '@/components/CikaFooter.vue'

  export default {
    name: "GalangDana",
    components: {
    NavBar,
    CikaFooter,
  },
    data() {
      return {
        categories: [],
        terms: [],
        name: "",
        telepon: "",
        pekerjaan: "",
        tempatKerja: ""
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic here
        console.log("Categories:", this.categories);
        console.log("Terms:", this.terms);
        console.log("Name:", this.name);
        console.log("Telepon:", this.telepon);
        console.log("Pekerjaan:", this.pekerjaan);
        console.log("Tempat Kerja:", this.tempatKerja);
      },
    }
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Arial MT Bold', Arial, sans-serif;
  }
  @import url('https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap');
  
  .right {
    width: 50%;
    padding: 85px;
    margin-top: -4.5vw;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input[type="text"], input[type="checkbox"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #B9B9B9;
    background-color: #B9B9B9;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .checkbox-group input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }
  
  .submit {
    width: 10%;
    padding: 10px;
    margin-left: 25vw;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #333333;
  }
  
  .back-button {
    color: #000000;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 2vw;
  }
  </style>