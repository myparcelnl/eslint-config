const preCommit = [
  // Don't forget to run ESLint on your ESLint
  'npm run lint',
];

module.exports = {
  'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  'precommit': preCommit.join(' && '),
};
