import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';
const externals = Object.keys(pkg.peerDependencies);
const isProd = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.ts',
  output: {
    sourcemap: isProd,
    format: 'es',
    dir: 'dist',
    plugins: [terser()],
  },
  external: [...externals],
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
    }),
  ],
};
