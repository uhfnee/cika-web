<template>
    <div class="card">
      <img :src="imageSrc" alt="Disaster Image" class="card-img">
      <div class="card-content">
        <p class="category">{{ category }}</p>
        <h3 class="title">{{ title }}</h3>
        <p class="amount">Terkumpul <span>{{ amount }}</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
      category: String,
      title: String,
      amount: String
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 16px;
    width: calc(33% - 32px);
  }
  .card-img {
    width: 20vw;
    margin-left: 2.7vw;
    margin-top: 2vw;
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
  </style>
  