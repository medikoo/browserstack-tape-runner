[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# browserstack-tape-runner

## Run tests configured with [tape](https://github.com/substack/tape) in browsers via [BrowserStack](https://browserstack.com)

<a href="https://browserstack.com"><img src="https://bstacksupport.zendesk.com/attachments/token/Pj5uf2x5GU9BvWErqAr51Jh2R/?name=browserstack-logo-600x315.png" height="150" /></a>

### Installation

    $ npm install -g browserstack-tape-runner

### Usage

In project path:

    $ browserstack-tape-runner --config browerstack.json test/**/*.js

For info on all options check `browserstack-tape-runner --help`

Tests results are reported to browserstack with help of [browserstack-tape-reporter](https://github.com/TehShrike/browserstack-tape-reporter) project. This package setups tests
up to instructions in referenced [blog post](https://joshduff.com/#!/post/2015-08-automated-testing-with-tape-and-browserstack.md)

### Tests

For tests to pass it's important to set `BROWSERSTACK_KEY` and `BROWSERSTACK_USERNAME` in your
environment

    $ npm test

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/sprintf-kit/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/sprintf-kit
[win-build-image]: https://ci.appveyor.com/api/projects/status/r5a4ashx40l6uavw?svg=true
[win-build-url]: https://ci.appveyor.com/api/projects/status/r5a4ashx40l6uavw
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/sprintf-kit.svg
[cov-url]: https://codecov.io/gh/medikoo/sprintf-kit
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/sprintf-kit.svg
[npm-url]: https://www.npmjs.com/package/sprintf-kit
