# Markbet

Simple matketing static website build with nuxt 3
https://v3.nuxtjs.org/

# Dependencies

Node 16 and up https://nodejs.org/en/
Once node is installed:

```bash
npm install -g yarn
```

# Install all Dependencies

```sh
yarn install
```

## Run locally

```bash
yarn dev
```

## Build for production

Build the application for production (full static):

```bash
yarn generate
```

Locally preview production build locally:

```bash
yarn preview
```

## Check translations

to check whether the translations are up to date (no missing or unused keys):

```bash
yarn translations
```

## Deployement on firebase with github actions

Require additional setup on github if you clone this repo

An action will build and deploy the project to firebase hosting using github action when pushing a commit to `main`
