module.exports = {
	displayName: 'main-site-front',
	preset: '../../jest.preset.cjs',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest',
	},
	coverageDirectory: '../../coverage/packages/main-site-front',
}
