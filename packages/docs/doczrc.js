/**
 * @see https://www.docz.site/documentation/project-configuration
 * @see https://github.com/pedronauck/docz/tree/master/packages/docz-theme-default
 */
export default {
  title: "Localzie Components",
  src: "./src",
  dest: "/dist",
  port: 8000,
  hashRouter: true,
  typescript: true,
  themeConfig: {
    mode: 'dark',
    htmlContext: {
      head: {
        links: [{
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css'
        }]
      }
    },
    themeConfig: {
      codemirrorTheme: 'dracula'
    },
    radii: '4px',
    container: {
      width: ['100%', '100%', 920],
      padding: ['20px', '0 40px 40px'],
    },
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
