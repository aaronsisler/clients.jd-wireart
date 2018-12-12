# React Boilerplate

## Description
This is used to start a new project using React, webpack, and babel.


## Prerequisites:

1. Clone this repo and run the following command to ignore committing Firebase API Key
```bash
    git update-index --assume-unchanged src/firebase/firebase.js
```

2. Setup a new [firebase](https://console.firebase.google.com/) project.

1. Copy the config and place it in the [firebase config](/src/firebase/firebase.js) file.

## Deving steps:

1. Install packages using [Yarn 1.7.0](https://github.com/yarnpkg/yarn/releases/tag/v1.7.0)

        yarn

1. Run webpack dev server on http://localhost:8080

        yarn devserver

## Deploying to Firebase

1. `yarn init` and follow the prompts
1. `yarn build` to generate the `public/dist` folder needed for SPA
1. `yarn firebase deploy`
