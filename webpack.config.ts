import path from 'path'
import {Configuration as WebpackConfiguration} from 'webpack'
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        // Use Babel to transpile/compile all .ts|js files
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
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

  // Location and name of output file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

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
  ],
}

export default config
