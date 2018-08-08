module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  testMatch: ['<rootDir>/test/unit/specs/**/*.ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: ['<rootDri>/src/components/**/*.vue'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'test-summary'],
  verbose: true,
  testURL: 'http://localhost/'
};
