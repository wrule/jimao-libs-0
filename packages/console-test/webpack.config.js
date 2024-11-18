const path = require('path');

module.exports = {
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
  mode: 'production',
  devtool: 'source-map',
};
