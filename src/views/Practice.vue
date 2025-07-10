<template>
  <div class="practice-container">
    <div class="practice-header">
      <h1>Boxing Practice</h1>
    </div>
    <div class="practice-content">
      <div class="boxer-display">
        <img src="@/assets/characters/players/boxer/profile.png" alt="Boxer" class="boxer-image" />
        <h2>Select Boxer for Practice</h2>
      </div>
      <div class="practice-controls">
        <button @click="startPractice" class="practice-btn">Start Practice</button>
        <button @click="goBack" class="back-btn">Back to Menu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Practice',
  methods: {
    startPractice() {
      // Navigate to practice play mode
      this.$router.push('/practice-play');
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
@import "@/assets/style/classes.scss";
@import "@/assets/style/global.scss";

.practice-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 20px;
}

.practice-header {
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    font-size: 3rem;
    color: #ff6b35;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    margin: 0;
  }
}

.practice-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.boxer-display {
  text-align: center;
  
  .boxer-image {
    width: 200px;
    height: auto;
    border-radius: 15px;
    border: 3px solid #ff6b35;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin: 0;
  }
}

.practice-controls {
  display: flex;
  gap: 20px;
  
  button {
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    &.practice-btn {
      background: linear-gradient(45deg, #ff6b35, #ff8c42);
      color: white;
      box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
      
      &:hover {
        background: linear-gradient(45deg, #e55a2b, #e67d35);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(255, 107, 53, 0.4);
      }
    }
    
    &.back-btn {
      background: linear-gradient(45deg, #666, #888);
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      
      &:hover {
        background: linear-gradient(45deg, #555, #777);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>
