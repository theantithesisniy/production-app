import webpack from 'webpack';

export default function buildLoaders(): webpack.RuleSetRule[] {
  const tsLoader = { // лучше вынести лоадеры в переменную т.к их последовательность имеет значение
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  
  return [tsLoader];
}
