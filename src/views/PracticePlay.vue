<template>
  <div class="practice-play-container">
    <div class="practice-header">
      <h2>Boxing Practice Ring</h2>
      <button @click="exitPractice" class="exit-btn">Exit Practice</button>
    </div>
    
    <div class="boxing-ring" :style="{ backgroundImage: worldBg }">
      <div class="boxer-character" :class="{ 'animate-idle': isIdle, 'animate-move': isMoving }">
        <img :src="currentAnimation" alt="Boxer" />
      </div>
      
      <div class="practice-instructions">
        <h3>Practice Controls:</h3>
        <p>Arrow Keys: Move around</p>
        <p>Space: Change animation</p>
        <p>ESC: Exit practice</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PracticePlay',
  data() {
    return {
      isIdle: true,
      isMoving: false,
      currentAnimationIndex: 0,
      animations: [
        '/src/assets/characters/players/boxer/idle.png',
        '/src/assets/characters/players/boxer/walkforward.png',
        '/src/assets/characters/players/boxer/walkbackward.png'
      ],
      worldBg: '',
      pressedKeys: []
    };
  },
  computed: {
    currentAnimation() {
      return this.animations[this.currentAnimationIndex];
    }
  },
  mounted() {
    this.loadWorldBackground();
    this.setupKeyListeners();
  },
  beforeUnmount() {
    this.removeKeyListeners();
  },
  methods: {
    loadWorldBackground() {
      import('@/assets/worlds/boxingRing.jpg').then(module => {
        this.worldBg = `url(${module.default || module})`;
      });
    },
    setupKeyListeners() {
      document.addEventListener('keydown', this.handleKeyDown);
      document.addEventListener('keyup', this.handleKeyUp);
    },
    removeKeyListeners() {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener('keyup', this.handleKeyUp);
    },
    handleKeyDown(event) {
      if (!this.pressedKeys.includes(event.code)) {
        this.pressedKeys.push(event.code);
      }
      
      switch(event.code) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          this.isMoving = true;
          this.isIdle = false;
          this.currentAnimationIndex = 1; // walkforward
          break;
        case 'Space':
          event.preventDefault();
          this.cycleAnimation();
          break;
        case 'Escape':
          this.exitPractice();
          break;
      }
    },
    handleKeyUp(event) {
      this.pressedKeys = this.pressedKeys.filter(key => key !== event.code);
      
      const movementKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
      const hasMovementKey = this.pressedKeys.some(key => movementKeys.includes(key));
      
      if (!hasMovementKey) {
        this.isMoving = false;
        this.isIdle = true;
        this.currentAnimationIndex = 0; // idle
      }
    },
    cycleAnimation() {
      this.currentAnimationIndex = (this.currentAnimationIndex + 1) % this.animations.length;
    },
    exitPractice() {
      this.$router.push('/practice');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
@import "@/assets/style/classes.scss";
@import "@/assets/style/global.scss";

.practice-play-container {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.practice-header {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 20px;
  
  h2 {
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin: 0;
  }
  
  .exit-btn {
    padding: 10px 20px;
    background: rgba(255, 107, 53, 0.9);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      background: rgba(229, 90, 43, 0.9);
    }
  }
}

.boxing-ring {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxer-character {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  
  img {
    width: 200px;
    height: auto;
    image-rendering: pixelated;
  }
  
  &.animate-idle {
    animation: idle 2s ease-in-out infinite;
  }
  
  &.animate-move {
    animation: bounce 0.5s ease-in-out infinite;
  }
}

.practice-instructions {
  position: absolute;
  top: 100px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #ff6b35;
  
  h3 {
    margin-top: 0;
    color: #ff6b35;
  }
  
  p {
    margin: 8px 0;
    font-size: 14px;
  }
}

@keyframes idle {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.02); }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}
</style>
