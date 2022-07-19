# hhow09.github.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

- deployment is done by github actions
- Follow the documentation [Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) to setup `.github/workflows/source.yml`
- generate private key `~/.ssh/id_rsa` and public key `~/.ssh/id_rsa.pub` at local
- `pbcopy < ~/.ssh/id_rsa.pub` to copy public key
- add `public key` in [Account settings: SSH keys](https://github.com/settings/keys) to allow push
- add `public key` in [repo settings: deploy keys](https://github.com/hhow09/hhow09.github.io/settings/keys)
- `pbcopy < ~/.ssh/id_rsa` to copy private key
- set the secrete variable `GH_PAGES_DEPLOY` in [repo: Actions secrets](https://github.com/hhow09/hhow09.github.io/settings/secrets/actions)
