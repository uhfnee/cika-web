<template>
    <NavBar />
    <div class="category-container">
      <h1>Kebakaran & Bencana</h1>
      <div class="card-container">
        <CardComponent
          v-for="(card, index) in cards"
          :key="index"
          :imageSrc="card.imageSrc"
          :category="card.category"
          :title="card.title"
          :amount="card.amount"
          :budget="card.budget"
        />
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import CardComponent from "@/components/CardComponent.vue";
  
  export default {
    name: 'KecelakaanBencana',
    components: {
      NavBar,
      CardComponent
    },
    data() {
      return {
        cards: [
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam longsor",
            title: "Kisah Pilu Sang Ayah Yang Kehilangan Rumah",
            amount: "Rp. 2,835,000",
            budget: 5000,
          },
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam banjir",
            title: "Banjir Besar di Kota",
            amount: "Rp. 1,500,000",
            budget: 15000,
          },
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam gempa",
            title: "Gempa Bumi Menghancurkan",
            amount: "Rp. 3,000,000",
            budget: 7000000,
          },
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam gempa",
            title: "Gempa Bumi Menghancurkan",
            amount: "Rp. 3,000,000",
            budget: 7000000,
          },
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam gempa",
            title: "Gempa Bumi Menghancurkan",
            amount: "Rp. 3,000,000",
            budget: 7000000,
          },
          {
            imageSrc: require("@/assets/home_disaster.png"),
            category: "bencana alam gempa",
            title: "Gempa Bumi Menghancurkan",
            amount: "Rp. 3,000,000",
            budget: 700,
          },
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  
  .category-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vw;
    padding: 0 5vw;
  }
  
  .images {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 2vw;
  }
  
  .image {
    width: 30vw;
    height: auto;
  }
  
  .image-left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  .image-middle {
    border-radius: 0px;
  }
  
  .image-right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  p {
    font-family: "Raleway";
    font-size: 30px;
    text-align: center;
  }
  
  .menu {
    display: flex;
    justify-content: center;
    margin-top: 2vw;
  }
  
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2vw;
    text-align: center;
  }
  
  .btnKategori,
  .btnRiwayat,
  .btnInbox {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin-bottom: 0.5vw;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2vw;
  }
  
  @media (max-width: 768px) {
    .container {
      margin-top: 10vw;
      padding: 0 2vw;
    }
  
    .images {
      flex-direction: column;
    }
  
    .image {
      width: 100%;
      margin-bottom: 2vw;
    }
  
    .image-left,
    .image-middle,
    .image-right {
      border-radius: 5px;
    }
  
    p {
      font-size: 6vw;
    }
  
    .menu {
      flex-direction: column;
    }
  
    .menu-item {
      margin: 2vw 0;
    }
  
    .btnKategori,
    .btnRiwayat,
    .btnInbox {
      width: 50px;
      height: 50px;
    }
  
    .card-container {
      flex-direction: column;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      margin-top: 7vw;
      padding: 0 5vw;
    }
  
    .images {
      flex-direction: row;
    }
  
    .image {
      width: 30vw;
    }
  
    p {
      font-size: 5vw;
    }
  
    .menu {
      flex-direction: row;
    }
  
    .menu-item {
      margin: 1vw;
    }
  
    .card-container {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  </style>
  