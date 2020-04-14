import Webpack from 'webpack';
import WebpackBar from 'webpackbar';//在建造或观看时显示优雅的进度条
import { ROOT_CLI_PATH, ROOT_PACKAGE_PATH } from '../util/dic';
import { isDev, isTest } from '../util';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const config = require(ROOT_PACKAGE_PATH('package.json'));
export const baseConfig: Webpack.Configuration = {
	stats: 'errors-only',
	output: {
		publicPath: './', //相对路径
	},
	resolve: {
		extensions: ['.js','.json','.jsx','.ts','.tsx'],
		alias: {
			'@': ROOT_PACKAGE_PATH('src'),
		},
		symlinks: false,
	},
	module: {
		rules: [
			{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            //prependData: `@import "@/styles/index.scss"; `,
                        },
                    },
                ],
            },
			{
				test: /\.js|tsx|ts$/,
				use: [
					'cache-loader',
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.jsx$/],
							appendTsxSuffixTo: [/\.jsx$/],
						},
					},
				],
				exclude:/node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/,
				loader: 'url-loader',
				include: [ROOT_PACKAGE_PATH('src/assets/img'), ROOT_CLI_PATH('site')],
				options: {
					limit: 3000,
					name: 'img/[name].[ext]',
					esModule: false, // 否则加载时为 [object]
				},
			},
			{
				test: /\.svg$/,
				loader: 'raw-loader',
				include: [ROOT_PACKAGE_PATH('src/assets/svg')],
				options: {
					esModule: false, // 否则加载时为 [object]
				},
			},
		],
	},
	plugins: [
		new Webpack.BannerPlugin({
			banner: `NutUI v${config.version} - [filebase], [hash], ${new Date()}
(c) 2017-2020 JDC
Released under the MIT License.`,
		}),
		new WebpackBar({
			name: 'NutUI-React',
			color: '#5396ff',
		}),
	],
};
