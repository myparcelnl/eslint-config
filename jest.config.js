module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  projects: [
    {
      displayName: 'test',
      testMatch: ['<rootDir>/test/**/*.spec.js'],
      transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
      },
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/test/**/*.test.js'],
    },
  ],
};
