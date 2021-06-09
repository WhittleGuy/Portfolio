import path from 'path'
import {Configuration as WebpackConfiguration} from 'webpack'
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import {InjectManifest} from 'workbox-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  // Location and name of output file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        // Use Babel to transpile/compile all .ts|js files
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        // Use the following loaders for all style files
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Very nice for debugging, but significantly bloats bundle
  //devtool: 'inline-source-map',

  // DevServer configuration
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },

  // Extras
  plugins: [
    // Speeds up TypeScript type checking and ESLint linting https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts, tsx, js, jsx}',
      },
    }),
    // Injects service worker
    new InjectManifest({
      swSrc: './src/modules/pwa/serviceWorker.ts',
      compileSrc: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/index.html', to: './index.html'},
        {from: './src/modules/pwa/manifest.json', to: './manifest.json'},
        {
          from: './src/modules/images/mbv3_512_512.png',
          to: './mbv3_512_512.png',
        },
      ],
    }),
  ],
}

export default config
