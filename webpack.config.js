const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

const target = process.env.TARGET;

module.exports = {
  entry: {
    background: path.join(process.cwd(), 'src/background.ts'),
    content_script: path.join(process.cwd(), 'src/content_script.ts'),
    options: path.join(process.cwd(), 'src/options.ts'),
    popup: path.join(process.cwd(), 'src/popup.ts'),
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        test: /\.ts?$/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), `build/${target}/js`),
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};