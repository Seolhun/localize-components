module.exports = {
  roots: ['.'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)': './src/$1',
  },
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/src/__test__/_config_/'],
  transformIgnorePatterns: ['/node_modules/', '/src/__test__/_config_/'],
};
