# Contributing

Contributions, issues and feature requests are very welcome. If you are using this package and fixed a bug for yourself, please consider submitting a PR! Also you can ping me at [Twitter](https://twitter.com/seol_hooney)

## Guidelines

If you will develop some pull request, it's very important follow these basic rules:

### Commit messages

Commit messages should follow the [commit message convention](https://conventionalcommits.org/) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `yarn commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### General guidelines

- The master branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branch. **Do not submit PRs against the master branch.**
- Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.
- Work in the **src** folder of respective package and **DO NOT** checkin dist in the commits.
- It's OK - and a very nice thing - to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

### If adding new feature:

- Make sure that [all examples](https://github.com/Seolhun/localize-components/tree/master/packages/examples) are running as expected
- Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

## Setup

### Pre-requisites

- *Node:* `^8.11.3>=`
- *Yarn:* `^1.9.4`

### Install

Check out the code and go into the localize-components directory:

```bash
git clone https://github.com/Seolhun/localize-components.git
cd localize-components
```

Then run yarn install and bootstrap all packages:

```bash
$ yarn install
$ yarn bs
```

After that, just run `packages` script to format, build and lint all packages:

```bash
$ yarn packages
```

## Developing

There's just few things that you need to know to start developing on localize-components

### Project structure

There's a lot of [packages](https://github.com/Seolhun/localize-components/tree/master/packages) that are necessary to run localize-components, but basically has just two that you need to know more about:

#### **[core](https://github.com/Seolhun/localize-components/tree/master/packages/core)**
- This is the core of localize-components. All base components, utils, skeleton codes belongs to here.
- If you break this package, probably you'll break all packages! Please, be carefull.
- All cli commands are built here and imported on `core` package using `./bin` script.
- Do not create scripts that's running on browser here, just node scripts.

#### **[localize-components](https://github.com/Seolhun/localize-components/tree/master/packages/localize-components)**
- Main and top level package.
- Scripts that's running on browser belongs to this package
- This package shouldn't have any component style, just render by props and logic!

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars.githubusercontent.com/Seolhun" width="60px;"/><br /><sub><b>Seol Hun</b></sub>](https://github.com/Seolhun)<br />[💻](https://github.com/Seolhun/localize-components/commits?author=Seolhun "Code") [📖](https://github.com/Seolhun/localize-components/commits?author=Seolhun "Documentation") [🐛](https://github.com/Seolhun/localize-components/issues?q=author%3ASeolhun "Bug reports") [👀](#review-Seolhun "Reviewed Pull Requests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
