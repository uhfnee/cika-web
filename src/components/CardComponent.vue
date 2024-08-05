<template>
  <div class="card">
    <img :src="imageSrc" alt="Disaster Image" class="card-img">
    <div class="card-content">
      <p class="category">{{ category }}</p>
      <h3 class="title">{{ title }}</h3>
      <p class="amount">Terkumpul <span>{{ amount }}</span></p>
      <div class="progress-bar">
        <div
          class="progress"
          :style="{ width: progressWidth }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    category: String,
    title: String,
    amount: String,
    budget: Number // Add budget as a prop
  },
  computed: {
    progressWidth() {
      const amount = parseFloat(this.amount.replace('Rp. ', '').replace(',', ''));
      return `${(amount / this.budget) * 100}%`;
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-inline: 30px;
  margin-block: 30px;
  width: calc(30% - 30px);
}
.card-img {
  width: 20vw;
  margin-left: 1vw;
  margin-top: 1vw;
}
.card-content {
  padding: 16px;
}
.category {
  color: #757575;
  font-size: 14px;
  margin-bottom: 8px;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.amount {
  font-size: 16px;
  font-weight: 500;
  color: #4CAF50;
}

.amount span {
  color: #000;
}

.progress-bar {
  background: #e0e0e0;
  border-radius: 5px;
  height: 10px;
  margin-top: 10px;
  position: relative;
  width: 100%;
}

.progress {
  background: #4CAF50;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease;
}
</style>