import path from 'path';

export default {
  entry: path.resolve(import.meta.__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(import.meta.__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'console_test',
      type: 'umd',
      export: 'main',
    },
    clean: true,
  },
  mode: 'production',
  devtool: 'source-map',
};
