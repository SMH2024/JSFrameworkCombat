module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/style/variables.scss";
          @import "@/assets/style/classes.scss";
          @import "@/assets/style/global.scss";`
      }
    }
  }
};
