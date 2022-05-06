const { resolve } = require('path')

module.exports = {
	displayName: 'main-site-front',
	preset: '../../jest.preset.cjs',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest',
	},
	coverageDirectory: '../../coverage/packages/main-site-front',
	moduleNameMapper: {
		['\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|' +
		'woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$']: resolve(
			'../../deps/jest/__mocks__/file-mock.cjs',
		),
		'\\.(css|less)$': resolve('../../deps/jest/__mocks__/style-mock.cjs'),
	},
}
