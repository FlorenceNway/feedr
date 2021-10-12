# Food Order

for deploy with github hosting

add in package.json
-   "homepage":"https://florencenway.github.io/feedr"
- script: {
    "deploy":"gh-pages -d build",

in terminal:
run
- git remote set-url origin  https://github.com/florencenway/feedr
- npm run build
- install -  npm install gh-pages --save-dev
- npm run deploy

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)
