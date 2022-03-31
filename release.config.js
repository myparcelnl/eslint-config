const {addGitHubPlugin} = require('@myparcel/semantic-release-config/src/plugins/addGitHubPlugin');
const mainConfig = require('@myparcel/semantic-release-config');
const {addCommitAnalyzerPlugin, addReleaseNotesGeneratorPlugin, addChangelogPlugin, addNpmPlugin} = require(
  '@myparcel/semantic-release-config/src/plugins',
);

module.exports = {
  ...mainConfig,
  'extends': '@myparcel/semantic-release-config/npm',
  'plugins': [
    addCommitAnalyzerPlugin({
      'releaseRules': [
        {'type': 'breaking', 'release': 'major'},
        {'type': 'new', 'release': 'minor'},
        {'type': 'rule', 'release': 'patch'},
      ],
      'parserOpts': {
        'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES'],
      },
    }),
    addReleaseNotesGeneratorPlugin({
      'presetConfig': {
        types: [
          {'type': 'breaking', 'section': 'Breaking 💥', 'hidden': false},
          {'type': 'new', 'section': 'New ✨', 'hidden': false},
          {'type': 'rule', 'section': 'Rule changes 📎', 'hidden': false},
        ],
      },
    }),
    addChangelogPlugin(),
    addNpmPlugin(),
    addGitHubPlugin(),
  ],
};
