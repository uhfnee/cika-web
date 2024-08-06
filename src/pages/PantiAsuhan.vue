<template>
    <NavBar />
    <div class="category-container">
      <h1>Panti Asuhan</h1>
      <div class="content">
        
        <p>
          Panti asuhan adalah tempat perlindungan bagi anak-anak yang membutuhkan. Dengan dukungan Anda, kita dapat memberikan mereka lingkungan yang penuh kasih, pendidikan yang baik, dan masa depan yang lebih cerah.
        </p>
      </div>
    </div>
    <CikaFooter />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import CikaFooter from '@/components/CikaFooter.vue';
  
  export default {
    name: 'PantiAsuhan',
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
  