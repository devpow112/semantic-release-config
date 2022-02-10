# Semantic Release Configuration

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![CI][CI Badge]][CI Workflow]
[![Release][Release Badge]][Release Workflow]
[![Vulnerabilities][Vulnerabilities Badge]][Vulnerabilities Report]
[![Node Version][Node Version Badge]](package.json#L35)

Shareable semantic release configuration.

## Installation

```sh
npm i -D @devpow112/semantic-release-config
```

## Usage

The shareable config can be configured in the [Semantic Release configuration]
file.

```json
{
  "extends": "@devpow112/semantic-release-config"
}
```

## Development

Development can be done on any machine that can install **Node.js**. Only the
latest LTS version is tested against.

### Install Dependencies

Install dependencies via `npm`.

```sh
npm i
```

### Linting

Execute linters via `npm`.

```sh
# git, javascript and markdown
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md
```

### Formatting

Execute formatters via `npm`.

```sh
# javascript and markdown
npm run format

# javascript only
npm run format:js

# markdown only
npm run format:md
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/semantic-release-config?label=License
[Version Badge]: https://img.shields.io/npm/v/@devpow112/semantic-release-config?label=Version
[Version Package]: https://www.npmjs.com/@devpow112/semantic-release-config
[Node Version Badge]: https://img.shields.io/node/v/@devpow112/semantic-release-config
[CI Badge]: https://github.com/devpow112/semantic-release-config/actions/workflows/ci.yml/badge.svg?branch=main
[CI Workflow]: https://github.com/devpow112/semantic-release-config/actions/workflows/ci.yml?query=branch%3Amain
[Release Badge]: https://github.com/devpow112/semantic-release-config/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/semantic-release-config/actions/workflows/release.yml?query=branch%3Amain
[Vulnerabilities Badge]: https://img.shields.io/snyk/vulnerabilities/github/devpow112/semantic-release-config?label=Vulnerabilities
[Vulnerabilities Report]: https://snyk.io/test/github/devpow112/semantic-release-config
[Semantic Release configuration]: https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations
