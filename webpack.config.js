const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {MiniCssExtractPlugin} = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
  };


module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};

module.exports = {
    output: {
      filename: 'my-first-webpack.bundle.js',
    },
    module: {
      rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
  };

 module.exports = {
    mode: 'production',
  };