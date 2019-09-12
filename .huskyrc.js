const preCommit = [
  // Don't forget to run ESLint on your ESLint
  'npm run lint',
];

module.exports = {
  'precommit': preCommit.join(' && '),
};
