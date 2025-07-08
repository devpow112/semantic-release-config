const noteKeywords = ['BREAKING CHANGE', 'BREAKING CHANGES'];

module.exports = {
  branches: [
    'main',
    'release/+([0-9])?(.{+([0-9]),x}).x'
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'chore', scope: 'deps', release: 'patch' },
          { type: 'refactor', release: 'patch' }
        ],
        parserOpts: { noteKeywords }
      }
    ],
    [
      '@semantic-release/github',
      {
        labels: ['auto'],
        releasedLabels: ['released'],
        addReleases: 'top'
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'perf', section: 'Performance Improvements' },
            { type: 'revert', section: 'Reverts' },
            { type: 'docs', section: 'Documentation' },
            { type: 'chore', section: 'Miscellaneous Chores' },
            { type: 'refactor', section: 'Code Refactoring' },
            { type: 'test', section: 'Tests' },
            { type: 'build', section: 'Build System' }
          ]
        },
        parserOpts: { noteKeywords }
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip actions]'
      }
    ]
  ]
};
