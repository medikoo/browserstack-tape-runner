"use strict";

var resolve  = require("path").resolve
  , test     = require("tape")
  , runTests = require("../");

test("Run browserstack tests", function (t) {
	var playgroundPath = resolve(__dirname, "_playground");

	var config = { project: "browserstack-tape-runner-test", browsers: ["chrome_latest"] };

	runTests(playgroundPath, [resolve(playgroundPath, "tape-test.js")], config).done(function (
		report
	) {
		var data;

		if (!report[0]) {
			t.fail("BrowserStack reported no tests");
			t.end();
			return;
		}
		data = report[0].suites;

		t.equal(data.passed, 1);
		t.equal(data.failed, 1);
		t.end();
	},
	t.end);
});
