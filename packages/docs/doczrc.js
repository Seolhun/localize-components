/**
 * @see https://www.docz.site/documentation/project-configuration
 */
export default {
  title: "Localzie Components Docs",
  src: "./src",
  dest: "/dist",
  port: 8000,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    showPlaygroundEditor: true,
    styles: {
      h1: {
        fontSize: 42,
      },
    },
  },
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};
