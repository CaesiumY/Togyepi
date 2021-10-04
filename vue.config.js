module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "토계피",
    themeColor: "#4DBA87",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/Togyepi/" : "/",
};
