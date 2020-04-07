module.exports = {
  'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  // Don't forget to run ESLint on your ESLint
  'precommit': 'npm run lint',
  'prepush': 'npm run test',
};
