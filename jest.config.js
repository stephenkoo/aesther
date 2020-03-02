const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

/* eslint-disable fp/no-mutation */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.tsx'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  /**
   * Make tsconfig paths work in Jest
   * https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper
   */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  clearMocks: true,
}
