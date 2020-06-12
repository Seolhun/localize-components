import autoprefixer from 'autoprefixer';
import postcssFlexboxfixer from 'postcss-flexboxfixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const externals = Object.keys(pkg.peerDependencies);

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    },
  ],
  external: [...externals],
  plugins: [
    resolve({
      dedupe: ['react', 'react-dom'],
      mainFields: ['module', 'main'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      objectHashIgnoreUnknownHack: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: /node_modules/,
    }),
    /**
     * @see https://github.com/postcss/postcss/blob/master/docs/plugins.md
     */
    postcss({
      extract: true,
      plugins: [autoprefixer, postcssFlexboxfixer],
      modules: true,
    }),
  ],
};
