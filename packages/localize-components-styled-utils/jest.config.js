module.exports = {
  roots: ['.'],
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/src/__test__/_config_/'],
};
