import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const { HotModuleReplacementPlugin } = webpack

const filename = fileURLToPath(import.meta.url)
const currentDirname = dirname(filename)

export default {
	mode: 'development',
	entry: resolve(currentDirname, './src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				exclude: /node_modules/,
				loader: 'esbuild-loader',
				options: {
					loader: 'tsx',
					target: 'es2018',
				},
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.ts', '.tsx'],
	},
	output: {
		path: resolve(currentDirname, '../../dist/main-site-front'),
		filename: 'bundle.js',
	},
	plugins: [new HotModuleReplacementPlugin(), new HtmlWebpackPlugin()],
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true,
	},
}
