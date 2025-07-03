const { defineConfig } = require('eslint/config');
const { includeIgnoreFile } = require('@eslint/compat');
const { nodeConfigs } = require('@devpow112/eslint-config');
const { resolve } = require('node:path');

const gitignorePath = resolve(__dirname, '.gitignore');

module.exports = defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nodeConfigs
]);
