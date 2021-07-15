import path from 'path'
import {Configuration as WebpackConfiguration} from 'webpack'
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server'
// import {InjectManifest} from 'workbox-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  //devtool: 'inline-source-map'
  resolve: {
    fallback: {
      fs: 'empty',
    },
    extensions: ['.tsx', '.ts', '.js', '.json', '.scss', '.png', '.svg'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  plugins: getPlugins(),

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
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
      {
        // Use the file-laoder for all image files
        test: /\.(png|jpe?g|gif)$/i,
        use: [{loader: 'file-loader'}],
      },
      {
        // Use the file-laoder for all image files
        test: /\.(svg)$/i,
        use: [{loader: 'url-loader'}],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
}

function getPlugins() {
  const plugins = [
    // new InjectManifest({
    //   swSrc: './src/modules/pwa/serviceWorker.ts',
    //   compileSrc: true,
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/index.html', to: './index.html'},
        // {from: './src/modules/pwa/manifest.json', to: './manifest.json'},
        // {
        //   from: './src/modules/images/mbv3_512_512.png',
        //   to: './mbv3_512_512.png',
        // },
      ],
    }),
  ]
  return plugins
}

export default config
