<template>
  <NavBar />
  <div class="container">
    <div class="image-container">
      <p>Donasilah untuk membuat perubahan</p>
    </div>
    <p>Donasi Kecelakaan & Bencana</p>
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
    <p>Donasi Kesehatan dan Pendidikan</p>
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
    <p>Donasi Panti Asuhan</p>
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
    <CikaFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "FullKategori",
  components: {
    NavBar,
    CardComponent,
    CikaFooter,
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
          category: "bencana alam gunung berapi",
          title: "Letusan Gunung Berapi Merusak Desa",
          amount: "Rp. 4,000,000",
          budget: 10000000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam kekeringan",
          title: "Kekeringan Parah di Wilayah Pertanian",
          amount: "Rp. 2,200,000",
          budget: 8000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam banjir",
          title: "Banjir Melanda Daerah Pesisir",
          amount: "Rp. 3,500,000",
          budget: 12000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam gempa",
          title: "Gempa Bumi Memporak-porandakan Kota",
          amount: "Rp. 5,000,000",
          budget: 15000000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam tsunami",
          title: "Tsunami Menghantam Pantai",
          amount: "Rp. 6,000,000",
          budget: 20000000,
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Arial TM Bold", Arial, sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");


.image-container {
  width: 100vw;
  height: 35vw;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/anak-sekolah.jpg");
  background-size: cover;
}
.image_container p {
  margin-top: 10vw;
  font-size: 20px;
  color: white;
}
.back-button {
  position: relative;
  top: 60px;
  left: 2%;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

p {
  font-family: "Raleway";
  font-size: 30px;
  padding-top: 0px;
  padding-left: 120px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vw;
  margin-left: 5vw;
}

@media (max-width: 768px) {
  .container {
    margin-top: 10vw;
    padding: 0 2vw;
  }

  p {
    font-size: 6vw;
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

  p {
    font-size: 5vw;
  }

  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
