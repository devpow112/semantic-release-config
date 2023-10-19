# Semantic Release Configuration

[![License][License Badge]](LICENSE)
[![Version][Version Badge]][Version Package]
[![Release][Release Badge]][Release Workflow]
[![Node Version][Node Version Badge]](package.json#L51)

Shareable semantic release configuration.

## Installation

```console
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

```console
npm i
```

### Linting

Execute linters via `npm`.

```console
# git, javascript, markdown and package.json
npm run lint

# git only
npm run lint:git

# javascript only
npm run lint:js

# markdown only
npm run lint:md

# package.json only
npm run lint:pkg
```

### Formatting

Execute formatters via `npm`.

```console
# javascript, markdown and package.json
npm run format

# javascript only
npm run format:js

# markdown only
npm run format:md

# package.json only
npm run format:pkg
```

<!-- links -->
[License Badge]: https://img.shields.io/github/license/devpow112/semantic-release-config?label=License
[Version Badge]: https://img.shields.io/npm/v/@devpow112/semantic-release-config?label=Version
[Version Package]: https://www.npmjs.com/@devpow112/semantic-release-config
[Node Version Badge]: https://img.shields.io/node/v/@devpow112/semantic-release-config
[Release Badge]: https://github.com/devpow112/semantic-release-config/actions/workflows/release.yml/badge.svg?branch=main
[Release Workflow]: https://github.com/devpow112/semantic-release-config/actions/workflows/release.yml?query=branch%3Amain
[Semantic Release configuration]: https://semantic-release.gitbook.io/semantic-release/usage/shareable-configurations
