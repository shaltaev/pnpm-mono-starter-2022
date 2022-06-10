import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import tailwindcss from 'tailwindcss'
import postcssPresetEnv from 'postcss-preset-env'

const currentDirname = process.env.INIT_CWD

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [tailwindcss(), postcssPresetEnv()],
							},
						},
					},
				],
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
	plugins: [new HtmlWebpackPlugin()],
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true,
	},
	resolveLoader: {
		modules: [resolve(__dirname, 'node_modules')],
		extensions: ['.js', '.json'],
		mainFields: ['loader', 'main'],
	},
}
