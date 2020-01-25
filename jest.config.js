const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  /**
   * Make tsconfig paths work in Jest
   * https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper
   */
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}
