<template>
  <div class="user-profile">
    <button class="back-button" @click="goBack">←</button>
    <div class="profile-picture">
      <img :src="profileImage" alt="Profile Picture" />
    </div>
    <div class="info">
      <div class="info-item">
        <span class="info-label">
          <img class="check-icon" src="@/assets/profile_icon.png" alt="Check Icon" />
          Nama Lengkap
        </span>
        <span class="info-value">{{ fullName }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">
          <img class="check-icon" src="@/assets/profile_icon.png" alt="Check Icon" />
          Email
        </span>
        <span class="info-value">{{ email }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">
          <img class="check-icon" src="@/assets/profile_icon.png" alt="Check Icon" /> No
          Telepon
        </span>
        <span class="info-value">{{ phoneNumber }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: require('@/assets/profile_photo.jpg'), // Replace with your profile picture path
      fullName: 'mikail sadam',
      email: 'akjsdj@gmail.com',
      phoneNumber: '08923736423',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Arial TM Bold', Arial, sans-serif;
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 5%;
  border-radius: 10px;
}

.back-button {
  position: relative;
  bottom: 50px;
  right: 50%;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.profile-picture img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.info {
  margin-top: 20px;
  width: 100%;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-left: 20px;
}

.info-label {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.info-value {
  font-size: 16px;
  margin-top: 10px;
  margin-left: 30px;
}

.check-icon {
  width: 22px; /* Adjust the size as needed */
  height: 22px; /* Adjust the size as needed */
  margin-right: 10px;
}
</style>