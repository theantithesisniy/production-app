import path from 'path';
import webpack from 'webpack';
import buildPlugins from './config/build/buildPllugins';
import buildLoaders from './config/build/buildLoaders';
import buildResolvers from './config/build/buildResolvers';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  plugins: buildPlugins(),

  module: {
    rules: buildLoaders(),
  },

  resolve: buildResolvers()
};

export default config;
