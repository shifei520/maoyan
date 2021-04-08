const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        view: "@/view",
        network: "@/network",
        common: "@/common",
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 这儿不能使用别名路径
        path.resolve(__dirname, "./src/assets/less/index.less"),
      ],
    },
  },

  //解决跨域问题
  devServer: {
    proxy: {
      "/mmdb": {
        target: "https://wx.maoyan.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/mmdb": "/mmdb",
        },
      },
    },
    // disableHostCheck: false,
    // host: "192.168.43.253",
    // port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: null
  },
  // devServer: {
  // disableHostCheck: false,
  // host: "192.168.1.102",
  // port: 8080,
  // https: false,
  // hotOnly: false,
  // proxy: null
  // },
};
