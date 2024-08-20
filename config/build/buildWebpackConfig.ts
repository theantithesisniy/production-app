import { BuildOptions } from './types/config';
import path from 'path';
import webpack from 'webpack';
import buildPlugins from '../build/buildPllugins';
import buildLoaders from '../build/buildLoaders';
import buildResolvers from '../build/buildResolvers';


export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
	
		plugins: buildPlugins(options),
	
		module: {
			rules: buildLoaders(),
		},
	
		resolve: buildResolvers()
	};
}