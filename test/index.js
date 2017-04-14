"use strict";

var resolve  = require("path").resolve
  , test     = require("tape")
  , runTests = require("../");

test("Run browserstack tests", function (t) {
	var playgroundPath = resolve(__dirname, "_playground");

	var config = {
		project: "browserstack-tape-runner-test",
		browsers: [{
			browser: "chrome",
			// eslint-disable-next-line camelcase
			browser_version: "latest",
			os: "OS X",
			// eslint-disable-next-line camelcase
			os_version: "Sierra"
		}]
	};

	runTests([resolve(playgroundPath, "tape-test.js")], config).done(function (report) {
		var data = report[0].suites;

		t.equal(data.passed, 1);
		t.equal(data.failed, 1);
		t.end();
	}, t.end);
});