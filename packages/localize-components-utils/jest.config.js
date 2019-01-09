module.exports = {
  rootDir: '.',
  setupTestFrameworkScriptFile: '<rootDir>/src/__test__/_config_/index.ts',
  testMatch: [
    '<rootDir>/src/**/*.test.ts?(x)',
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx', 'json'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/__test__/_config_/'
  ],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts?(x)$/,
        warnOnly: true,
      }
    }
  }
};
