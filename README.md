# react-ui
react版本组件库

### 问题1
npm link 可以运行的代码，但是npm publish之后，在npm i之后确无法在本地运行，要考虑以下方面：
1. 本地安装 "@babel/preset-react": "^7.9.4" 环境，配置babel.config.js文件
```js
const presets = [
	[
		'@babel/preset-react',
		{
			loose: true,
			modules: false,
		},
		'react'
	],
];
const plugins = [];
module.exports = { presets, plugins };
```
2. 由于路径问题可能会导致找不到 package.json 文件，所以生成的react-cli包的名字带有文件夹/文件名：
  "name": "@zhenyulei/react-myclis"
3. webpack的配置项也要修改：
```js
{
    test: /\.(js|tsx|ts)$/,
    use: [
        'cache-loader',
        'babel-loader',
        {
            loader: 'ts-loader',
            options: {
                allowTsInNodeModules: true 
            },
        },
    ],
    include: [ROOT_PACKAGE_PATH('src'), ROOT_PACKAGE_PATH('types'), ROOT_CLI_PATH('site'), ROOT_CLI_PATH('src')],
},
```
先用include限制使用ts-loader；再增加ts-loader的options：allowTsInNodeModules: true
允许ts编译 NodeModules 的文件；
4. 不要有js文件，都要写成ts文件或者tsx文件；