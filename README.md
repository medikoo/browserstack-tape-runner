# browserstack-tape-runner
## Run tests configured with [tape](https://github.com/substack/tape) in browsers via browserstack

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
