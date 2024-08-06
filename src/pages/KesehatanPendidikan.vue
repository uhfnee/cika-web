<template>
    <NavBar />
    <div class="category-container">
      <h1>Kesehatan & Pendidikan</h1>
      <div class="content">
        
        <p>
          Pendidikan dan kesehatan adalah fondasi masa depan yang lebih baik. Dukungan Anda dapat membantu memberikan akses ke pendidikan dan layanan kesehatan yang layak bagi anak-anak dan masyarakat yang kurang beruntung.
        </p>
      </div>
    </div>
    <CikaFooter />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import CikaFooter from '@/components/CikaFooter.vue';
  
  export default {
    name: 'KesehatanPendidikan',
    components: {
      NavBar,
      CikaFooter,
    },
  };
  </script>
  
  <style scoped>
  .category-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
    margin-top: 10vw;
  }
  
  h1 {
    font-family: 'Raleway';
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .content {
    text-align: center;
  }
  
  .category-image {
    width: 50%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  p {
    font-family: 'Raleway';
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 1rem 0;
  }
  </style>
  