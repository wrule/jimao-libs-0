const path = require('path');

module.exports = {
  // 入口文件
  entry: './src/index.ts', // 假设你的文件在 src/index.ts

  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'MyLib', // 这将成为全局变量名
      type: 'umd', // 支持 CommonJS、AMD 和全局变量
      export: 'main' // 导出 main 函数
    },
    clean: true // 在每次构建前清理 dist 文件夹
  },

  // 模式设置
  mode: 'production', // 或者 'development'

  // 模块规则
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  // 解析配置
  resolve: {
    extensions: ['.ts', '.js']
  },

  // 开发工具
  devtool: 'source-map'
};
