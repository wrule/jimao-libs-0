import path from 'path';

const __dirname = import.meta.dirname;

export default {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'console_test',
      type: 'umd',
      export: 'main',
    },
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
  devtool: 'source-map',
};
