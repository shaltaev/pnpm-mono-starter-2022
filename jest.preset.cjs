module.exports = {
	testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
	// resolver: '',
	moduleFileExtensions: ['ts', 'js', 'mjs', 'html'],
	coverageReporters: ['html'],
	transform: {
		'^.+\\.(ts|js|html)$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
}
