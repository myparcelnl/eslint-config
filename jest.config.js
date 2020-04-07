module.exports = {
  'clearMocks': true,
  'collectCoverageFrom': ['<rootDir>/src/**/*.*'],
  'transform': {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  'projects': [
    {
      displayName: 'test',
      testMatch: ['<rootDir>/test/**/*.spec.*'],
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: ['<rootDir>/test/**/*.lint.*'],
    },
  ],
};
