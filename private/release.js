const {spawn} = require('child_process');
const [, , ...args] = process.argv;
const standardVersionArgs = [];
const githubReleaseArgs = [];

if (args.includes('--dry-run')) {
  githubReleaseArgs.push('--dryRun');
}

const standardVersion = spawn('standard-version', [...standardVersionArgs, ...args], {stdio: 'inherit'});

standardVersion.on('close', () => {
  spawn('github-release-from-changelog', [...githubReleaseArgs], {stdio: 'inherit'});
});
