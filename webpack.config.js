const { join } = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const src = join(__dirname, 'src')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/main.jsx',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': src
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: {
    rules: [
      { test: /\.(jsx?)$/, include: src, loader: 'babel-loader' }
    ]
  },
  devServer: {
    port: 8888
  }
}
