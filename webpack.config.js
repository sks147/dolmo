const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'main.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/, 
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json'
    ]
  },
};