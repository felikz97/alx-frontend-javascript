const path = require('path');

module.exports = {
  entry: './js/main.ts',            // <-- correct entry
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // <-- bundle.js goes here
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: './dist',
    open: true
  }
};
