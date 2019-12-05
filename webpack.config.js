const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	context: `${__dirname}`,
	output: {
		publicPath: './dist/',
		filename: "[name].js",
		chunkFilename: '[name].js',
		library: "[name]",
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,

				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer(),
							],
						},
					},
				],
			},
			// {
			// 	enforce: 'pre',
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	loader: 'eslint-loader',
			// 	options: {
			// 		fix: true,
			// 		formatter: 'stylish',
			// 	},
			// },
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/images/[name].[ext]',
							publicPath: '/',
						},
					},
				],
			},
			{
				test: /\.js$'/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["@babel/preset-env"],
							plugins: ["@babel/plugin-syntax-dynamic-import"],
						},
					},

				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new CleanWebpackPlugin(),
	],
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'initial',
	// 	},
	// },
};
