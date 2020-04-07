module.exports = {
  'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  // Don't forget to run ESLint on your ESLint
  'pre-commit': 'npm run lint',
  'pre-push': 'npm run test',
};
