const {spawn} = require('child_process');
const [, , ...args] = process.argv;
const standardVersionArgs = [];
const githubReleaseArgs = [];

if (args.includes('--dry-run')) {
  githubReleaseArgs.push('--dryRun');
}

spawn('standard-version', ['-t', ...standardVersionArgs, ...args], {stdio: 'inherit'});
spawn('github-release-from-changelog', [...githubReleaseArgs], {stdio: 'inherit'});
