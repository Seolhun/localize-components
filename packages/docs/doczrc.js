/**
 * @see https://www.docz.site/documentation/project-configuration
 * @see https://github.com/pedronauck/docz/tree/master/packages/docz-theme-default
 */
export default {
  // Docz Conf
  title: 'Localize Components',
  src: './src',
  dest: '/dist',
  port: 9000,
  description: 'Localized-components without effect',
  repository: 'https://github.com/Seolhun/localize-components',
  indexHtml: 'public/index.html',
  hashRouter: true,
  typescript: true,
  propsParser: false,
  codeSandbox: false,
  menu: [
    'Home',
    'Atomic',
    'Components',
    // 'Compatibility',
  ],
  ordering: 'ascending',
  htmlContext: {
    favicon: '/public/favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css',
        },
      ],
    },
  },
  // Style Conf
  themeConfig: {
    repository: 'https://github.com/Seolhun/localize-components',
    mode: 'dark',
    logo: {
      src: '/public/logo.png',
      width: 150,
    },
    codemirrorTheme: 'dracula',
    showPlaygroundEditor: true,
    radii: '4px',
    styles: {
      h1: {
        fontSize: 42,
      },
    },
  },
  modifyBundlerConfig: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};
/**
 * Ref DOCZ
 * @see https://github.com/pedronauck/docz-website/blob/master/doczrc.js
 */
