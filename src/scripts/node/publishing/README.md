# How to publish Npm Repository
- Author : [SeolHun](https://github.com/Seolhun/)

## npm이란?
npm을 사용하면 JavaScript 개발자가 코드를 쉽게 공유하고 재사용 할 수 있으며 공유하는 코드를 쉽게 업데이트 할 수 있습니다.

## Pre-Reqirement
- GitHub 계정에 등록하십시오.
- Node.js를 설치하십시오 (npm은 Node와 함께 제공되지만 종종 오래된 버전입니다)
- 최신 npm 버전으로 업데이트하십시오. (노드의 릴리스주기는 주당 npm보다 훨씬 느립니다)

## Initialize a npm package
- npm module을 만들어보자.
1. npm login
2. npm init
    - If you want to namespace your modules, do this instead
    > npm init --scope=username

## Commit & push to GitHub
- 버전 태그도 만들어 보자.
1. git add .
2. git commit -m “Initial release”
3. git tag v0.1.0
4. git push origin master --tags
5. npm publish
    - Scoped packages are private by default.
    - > npm publish --access=public

## CI(Travis CI)
- .travis.yml 파일을 만들어보자.
```yml
language: node_js

node_js:
  - stable

install:
  - npm install

script:
  - npm test
```


## Reference
[How to Create and Publish Your First Node.js Module](https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738)