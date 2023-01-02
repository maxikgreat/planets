module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1']
  },
  globalSetup: '<rootDir>/tests/globalSetup.ts',
  globalTeardown: '<rootDir>/tests/globalTeardown.ts',
  modulePathIgnorePatterns: ['<rootDir>/dist/']
};
