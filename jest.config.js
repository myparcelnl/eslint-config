module.exports = {
  'clearMocks': true,
  'collectCoverageFrom': [
    '<rootDir>/src/**/*.js',
    '<rootDir>/src/**/*.ts',
  ],
  'transform': {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  'projects': [
    {
      displayName: 'test',
      testMatch: [
        '<rootDir>/test/**/*.spec.js',
      ],
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: [
        '<rootDir>/test/**/*.lint.js',
        '<rootDir>/test/**/*.lint.ts',
      ],
    },
  ],
};
