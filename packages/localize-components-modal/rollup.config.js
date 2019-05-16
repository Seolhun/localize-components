import autoprefixer from 'autoprefixer';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const externals = Object.keys(pkg.dependencies).filter(key => !key.startsWith('@'));

export default {
  input: 'src/index.ts',

  external: [
    ...externals,
    'path',
    'fs',
    'resolve',
    'rollup-pluginutils',
    'typescript',
  ],
  plugins: [
    resolve({
      dedupe: ['react', 'react-dom'],
      mainFields: ['module', 'main'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    commonjs({
      include: /node_modules/,
    }),
    postcss({
      extract: true,
      plugins: [
        autoprefixer,
      ],
      modules: true,
    }),
  ],
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
};
