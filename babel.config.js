const presets = [
	[
		'@babel/preset-env',
		{
			loose: true,
			modules: false,
		},
		'react'
	],
];

const plugins = [];

module.exports = { presets, plugins };
