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
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.vue'],
  coveragePathIgnorePatterns: ['<rootDir>/src/components/App.vue'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['html', 'text-summary'],
  verbose: true,
  testURL: 'http://localhost/'
};
