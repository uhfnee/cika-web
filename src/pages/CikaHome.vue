<template>
  <NavBar />
  <div class="container">
    <div class="images">
      <img
        :src="require('@/assets/home_pantiasuhan.png')"
        alt="Image 1"
        class="image image-left"
      />
      <img
        :src="require('@/assets/kebanjiran.jpg')"
        alt="Image 2"
        class="image image-middle"
      />
      <img
        :src="require('@/assets/home_kebakaran.png')"
        alt="Image 3"
        class="image image-right"
      />
    </div>
    <p>"Berbagi Cinta, Membangun Harapan"</p>
    <div class="menu">
      <div class="menu-item">
        <button class="btnKategori" @click="goToKategori">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 25H31.25M6.25 12.5H43.75M6.25 37.5H43.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        Kategori
      </div>
      <div class="menu-item">
        <button class="btnRiwayat" @click="goToRiwayat">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.2916 28.125L43.1261 23.9583L38.9582 28.125M43.75 25C43.75 35.3553 35.3553 43.75 25 43.75C14.6447 43.75 6.25 35.3553 6.25 25C6.25 14.6447 14.6447 6.25 25 6.25C31.879 6.25 37.8928 9.95445 41.1552 15.4773M25 14.5833V25L31.25 29.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        Riwayat
      </div>
      <div class="menu-item">
        <button class="btnInbox" @click="goToInbox">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16663 14.5833L21.1769 26.4905C22.5543 27.4547 23.243 27.9368 23.9922 28.1236C24.6539 28.2885 25.346 28.2885 26.0077 28.1236C26.7569 27.9368 27.4456 27.4547 28.823 26.4905L45.8333 14.5833M14.1666 41.6667H35.8333C39.3336 41.6667 41.0838 41.6667 42.4207 40.9855C43.5967 40.3863 44.5529 39.4301 45.1521 38.2541C45.8333 36.9172 45.8333 35.167 45.8333 31.6667V18.3333C45.8333 14.833 45.8333 13.0829 45.1521 11.7459C44.5529 10.5699 43.5967 9.61376 42.4207 9.01455C41.0838 8.33334 39.3336 8.33334 35.8333 8.33334H14.1666C10.6663 8.33334 8.91613 8.33334 7.57919 9.01455C6.40317 9.61376 5.44704 10.5699 4.84784 11.7459C4.16663 13.0829 4.16663 14.833 4.16663 18.3333V31.6667C4.16663 35.167 4.16663 36.9172 4.84784 38.2541C5.44704 39.4301 6.40317 40.3863 7.57919 40.9855C8.91613 41.6667 10.6663 41.6667 14.1666 41.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        Inbox
      </div>
    </div>
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
  <CikaFooter/>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import NavBar from '@/components/NavBar.vue';
import CikaFooter from '@/components/CikaFooter.vue'

export default {
  name: 'CikaHome',
  components: {
    CardComponent,
    NavBar,
    CikaFooter
  },
  data() {
    return {
      cards: [
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam longsor',
          title: 'Kisah Pilu Sang Ayah Yang Kehilangan Rumah',
          amount: 'Rp. 2,835,000',
          budget: 5000
        },
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam banjir',
          title: 'Banjir Besar di Kota',
          amount: 'Rp. 1,500,000',
          budget: 15000
        },
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam gempa',
          title: 'Gempa Bumi Menghancurkan',
          amount: 'Rp. 3,000,000',
          budget: 7000000
        },
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam gempa',
          title: 'Gempa Bumi Menghancurkan',
          amount: 'Rp. 3,000,000',
          budget: 7000000
        },
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam gempa',
          title: 'Gempa Bumi Menghancurkan',
          amount: 'Rp. 3,000,000',
          budget: 7000000
        },
        {
          imageSrc: require('@/assets/home_disaster.png'),
          category: 'bencana alam gempa',
          title: 'Gempa Bumi Menghancurkan',
          amount: 'Rp. 3,000,000',
          budget: 700
        },
      ]
    };
  },
  methods: {
    goToKategori() {
      this.$router.push('/CikaKategori');
    },
    goToRiwayat() {
      this.$router.push('/CikaRiwayat');
    },
    goToInbox() {
      this.$router.push('/CikaInbox');
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.container {
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
  font-family: 'Raleway';
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

.btnKategori, .btnRiwayat, .btnInbox {
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

  .image-left, .image-middle, .image-right {
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

  .btnKategori, .btnRiwayat, .btnInbox {
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
