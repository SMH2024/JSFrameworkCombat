import characters from '../assets/constants/characters';
import characterActions from '../assets/constants/characterActions';
import constants from '../assets/constants/common';
import store from '../store/index';

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
        import(/* @vite-ignore */ '../assets/worlds/boxingRing.jpg').then(module => {
          worldBg.src = module.default || module;
        });

        // get profile pic
        const profilePic = new Image();
        this.assets.characters[characterModes[type]][character].profilePic = profilePic;
        import(
          /* @vite-ignore */
          `../assets/characters/${characterModes[type]}/${character}/profile.png`
        ).then(module => {
          profilePic.src = module.default || module;
        });

        // get action sprites
        availableCharacterActions.forEach(action => {
          const actionSprite = new Image();
          actionSprite.onload = () => {
            this.numOfLoadedAssets++;
            if (this.numOfLoadedAssets === this.totalNumOfAssets) {
              store.commit('setAssetsLoaded', true);
            }
          };
          this.assets.characters[characterModes[type]][character][action] = actionSprite;
          import(
            /* @vite-ignore */
            `../assets/characters/${characterModes[type]}/${character}/${action}.png`
          ).then(module => {
            actionSprite.src = module.default || module;
          });
        });
      });
    });
  }
};
