module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'macros',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'react-native-reanimated/plugin',
		'@babel/plugin-transform-named-capturing-groups-regex',
		['module:react-native-dotenv']
	],
	env: {
		production: {
			plugins: ['transform-remove-console']
		}
	}
};
