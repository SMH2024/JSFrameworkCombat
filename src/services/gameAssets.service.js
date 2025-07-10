import characters from '../assets/constants/characters';
import characterActions from '../assets/constants/characterActions';
import constants from '../assets/constants/common';
import store from '../store/index';

// Import assets statically - Vite will handle these properly
import boxingRingUrl from '../assets/worlds/boxingRing.jpg';

// Import all character images statically
import vueDead from '../assets/characters/players/vue/dead.png';
import vueIdle from '../assets/characters/players/vue/idle.png';
import vueAttack from '../assets/characters/players/vue/attack.png';
import vueDie from '../assets/characters/players/vue/die.png';
import vueDizzy from '../assets/characters/players/vue/dizzy.png';
import vueJetpack from '../assets/characters/players/vue/jetpack.png';
import vueJump from '../assets/characters/players/vue/jump.png';
import vueProfile from '../assets/characters/players/vue/profile.png';
import vueRoll from '../assets/characters/players/vue/roll.png';
import vueRun from '../assets/characters/players/vue/run.png';
import vueRunWithGun from '../assets/characters/players/vue/runWithGun.png';
import vueShoot from '../assets/characters/players/vue/shoot.png';
import vueSlide from '../assets/characters/players/vue/slide.png';
import vueTakeDamage from '../assets/characters/players/vue/takeDamage.png';
import vueThrowing from '../assets/characters/players/vue/throwing.png';

import reactDead from '../assets/characters/players/react/dead.png';
import reactIdle from '../assets/characters/players/react/idle.png';
import reactAttack from '../assets/characters/players/react/attack.png';
import reactDie from '../assets/characters/players/react/die.png';
import reactDizzy from '../assets/characters/players/react/dizzy.png';
import reactJetpack from '../assets/characters/players/react/jetpack.png';
import reactJump from '../assets/characters/players/react/jump.png';
import reactProfile from '../assets/characters/players/react/profile.png';
import reactRoll from '../assets/characters/players/react/roll.png';
import reactRun from '../assets/characters/players/react/run.png';
import reactRunWithGun from '../assets/characters/players/react/runWithGun.png';
import reactShoot from '../assets/characters/players/react/shoot.png';
import reactSlide from '../assets/characters/players/react/slide.png';
import reactTakeDamage from '../assets/characters/players/react/takeDamage.png';
import reactThrowing from '../assets/characters/players/react/throwing.png';

import angularDead from '../assets/characters/players/angular/dead.png';
import angularIdle from '../assets/characters/players/angular/idle.png';
import angularAttack from '../assets/characters/players/angular/attack.png';
import angularDie from '../assets/characters/players/angular/die.png';
import angularDizzy from '../assets/characters/players/angular/dizzy.png';
import angularJetpack from '../assets/characters/players/angular/jetpack.png';
import angularJump from '../assets/characters/players/angular/jump.png';
import angularProfile from '../assets/characters/players/angular/profile.png';
import angularRoll from '../assets/characters/players/angular/roll.png';
import angularRun from '../assets/characters/players/angular/run.png';
import angularRunWithGun from '../assets/characters/players/angular/runWithGun.png';
import angularShoot from '../assets/characters/players/angular/shoot.png';
import angularSlide from '../assets/characters/players/angular/slide.png';
import angularTakeDamage from '../assets/characters/players/angular/takeDamage.png';
import angularThrowing from '../assets/characters/players/angular/throwing.png';

// Enemy imports
import vueEnemyDead from '../assets/characters/enemies/vue/dead.png';
import vueEnemyIdle from '../assets/characters/enemies/vue/idle.png';
import vueEnemyAttack from '../assets/characters/enemies/vue/attack.png';
import vueEnemyDie from '../assets/characters/enemies/vue/die.png';
import vueEnemyDizzy from '../assets/characters/enemies/vue/dizzy.png';
import vueEnemyJetpack from '../assets/characters/enemies/vue/jetpack.png';
import vueEnemyJump from '../assets/characters/enemies/vue/jump.png';
import vueEnemyProfile from '../assets/characters/enemies/vue/profile.png';
import vueEnemyRoll from '../assets/characters/enemies/vue/roll.png';
import vueEnemyRun from '../assets/characters/enemies/vue/run.png';
import vueEnemyRunWithGun from '../assets/characters/enemies/vue/runWithGun.png';
import vueEnemyShoot from '../assets/characters/enemies/vue/shoot.png';
import vueEnemySlide from '../assets/characters/enemies/vue/slide.png';
import vueEnemyTakeDamage from '../assets/characters/enemies/vue/takeDamage.png';
import vueEnemyThrowing from '../assets/characters/enemies/vue/throwing.png';

import reactEnemyDead from '../assets/characters/enemies/react/dead.png';
import reactEnemyIdle from '../assets/characters/enemies/react/idle.png';
import reactEnemyAttack from '../assets/characters/enemies/react/attack.png';
import reactEnemyDie from '../assets/characters/enemies/react/die.png';
import reactEnemyDizzy from '../assets/characters/enemies/react/dizzy.png';
import reactEnemyJetpack from '../assets/characters/enemies/react/jetpack.png';
import reactEnemyJump from '../assets/characters/enemies/react/jump.png';
import reactEnemyProfile from '../assets/characters/enemies/react/profile.png';
import reactEnemyRoll from '../assets/characters/enemies/react/roll.png';
import reactEnemyRun from '../assets/characters/enemies/react/run.png';
import reactEnemyRunWithGun from '../assets/characters/enemies/react/runWithGun.png';
import reactEnemyShoot from '../assets/characters/enemies/react/shoot.png';
import reactEnemySlide from '../assets/characters/enemies/react/slide.png';
import reactEnemyTakeDamage from '../assets/characters/enemies/react/takeDamage.png';
import reactEnemyThrowing from '../assets/characters/enemies/react/throwing.png';

import angularEnemyDead from '../assets/characters/enemies/angular/dead.png';
import angularEnemyIdle from '../assets/characters/enemies/angular/idle.png';
import angularEnemyAttack from '../assets/characters/enemies/angular/attack.png';
import angularEnemyDie from '../assets/characters/enemies/angular/die.png';
import angularEnemyDizzy from '../assets/characters/enemies/angular/dizzy.png';
import angularEnemyJetpack from '../assets/characters/enemies/angular/jetpack.png';
import angularEnemyJump from '../assets/characters/enemies/angular/jump.png';
import angularEnemyProfile from '../assets/characters/enemies/angular/profile.png';
import angularEnemyRoll from '../assets/characters/enemies/angular/roll.png';
import angularEnemyRun from '../assets/characters/enemies/angular/run.png';
import angularEnemyRunWithGun from '../assets/characters/enemies/angular/runWithGun.png';
import angularEnemyShoot from '../assets/characters/enemies/angular/shoot.png';
import angularEnemySlide from '../assets/characters/enemies/angular/slide.png';
import angularEnemyTakeDamage from '../assets/characters/enemies/angular/takeDamage.png';
import angularEnemyThrowing from '../assets/characters/enemies/angular/throwing.png';

// Create asset map
const assetMap = {
  worlds: {
    boxingRing: boxingRingUrl
  },
  characters: {
    players: {
      vue: {
        dead: vueDead,
        idle: vueIdle,
        attack: vueAttack,
        die: vueDie,
        dizzy: vueDizzy,
        jetpack: vueJetpack,
        jump: vueJump,
        profile: vueProfile,
        roll: vueRoll,
        run: vueRun,
        runWithGun: vueRunWithGun,
        shoot: vueShoot,
        slide: vueSlide,
        takeDamage: vueTakeDamage,
        throwing: vueThrowing
      },
      react: {
        dead: reactDead,
        idle: reactIdle,
        attack: reactAttack,
        die: reactDie,
        dizzy: reactDizzy,
        jetpack: reactJetpack,
        jump: reactJump,
        profile: reactProfile,
        roll: reactRoll,
        run: reactRun,
        runWithGun: reactRunWithGun,
        shoot: reactShoot,
        slide: reactSlide,
        takeDamage: reactTakeDamage,
        throwing: reactThrowing
      },
      angular: {
        dead: angularDead,
        idle: angularIdle,
        attack: angularAttack,
        die: angularDie,
        dizzy: angularDizzy,
        jetpack: angularJetpack,
        jump: angularJump,
        profile: angularProfile,
        roll: angularRoll,
        run: angularRun,
        runWithGun: angularRunWithGun,
        shoot: angularShoot,
        slide: angularSlide,
        takeDamage: angularTakeDamage,
        throwing: angularThrowing
      }
    },
    enemies: {
      vue: {
        dead: vueEnemyDead,
        idle: vueEnemyIdle,
        attack: vueEnemyAttack,
        die: vueEnemyDie,
        dizzy: vueEnemyDizzy,
        jetpack: vueEnemyJetpack,
        jump: vueEnemyJump,
        profile: vueEnemyProfile,
        roll: vueEnemyRoll,
        run: vueEnemyRun,
        runWithGun: vueEnemyRunWithGun,
        shoot: vueEnemyShoot,
        slide: vueEnemySlide,
        takeDamage: vueEnemyTakeDamage,
        throwing: vueEnemyThrowing
      },
      react: {
        dead: reactEnemyDead,
        idle: reactEnemyIdle,
        attack: reactEnemyAttack,
        die: reactEnemyDie,
        dizzy: reactEnemyDizzy,
        jetpack: reactEnemyJetpack,
        jump: reactEnemyJump,
        profile: reactEnemyProfile,
        roll: reactEnemyRoll,
        run: reactEnemyRun,
        runWithGun: reactEnemyRunWithGun,
        shoot: reactEnemyShoot,
        slide: reactEnemySlide,
        takeDamage: reactEnemyTakeDamage,
        throwing: reactEnemyThrowing
      },
      angular: {
        dead: angularEnemyDead,
        idle: angularEnemyIdle,
        attack: angularEnemyAttack,
        die: angularEnemyDie,
        dizzy: angularEnemyDizzy,
        jetpack: angularEnemyJetpack,
        jump: angularEnemyJump,
        profile: angularEnemyProfile,
        roll: angularEnemyRoll,
        run: angularEnemyRun,
        runWithGun: angularEnemyRunWithGun,
        shoot: angularEnemyShoot,
        slide: angularEnemySlide,
        takeDamage: angularEnemyTakeDamage,
        throwing: angularEnemyThrowing
      }
    }
  }
};

export default {
  assets: {},
  numOfLoadedAssets: 0,
  totalNumOfAssets:
    Object.keys(characters).length *
    Object.keys(characterActions).length *
    Object.keys(constants.characterModes).length,
  loadGameAssets: function() {
    this.assets.characters = {};

    const characterModes = constants.characterModes;
    const characterTypes = Object.keys(characterModes);
    const availableCharacters = Object.keys(characters);
    const availableCharacterActions = Object.keys(characterActions);

    characterTypes.forEach(type => {
      this.assets.characters[characterModes[type]] = {};
      availableCharacters.forEach(character => {
        this.assets.characters[characterModes[type]][character] = {};

        // get world background pic
        const worldBg = new Image();
        this.assets.worldBg = worldBg;
        worldBg.src = assetMap.worlds.boxingRing;

        // get profile pic
        const profilePic = new Image();
        this.assets.characters[characterModes[type]][character].profilePic = profilePic;
        profilePic.src = assetMap.characters[characterModes[type]][character].profile;

        // get all action sprites
        availableCharacterActions.forEach(action => {
          const actionSprite = new Image();
          actionSprite.onload = () => {
            this.numOfLoadedAssets++;
            if (this.numOfLoadedAssets === this.totalNumOfAssets) {
              store.commit('setAssetsLoaded', true);
            }
          };
          this.assets.characters[characterModes[type]][character][action] = actionSprite;
          actionSprite.src = assetMap.characters[characterModes[type]][character][action];
        });
      });
    });
  }
};
