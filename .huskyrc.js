module.exports = {
  hooks: {
    // Don't forget to run ESLint on your ESLint
    'pre-commit': 'npm run lint',
    'pre-push': 'npm test',
  },
};
