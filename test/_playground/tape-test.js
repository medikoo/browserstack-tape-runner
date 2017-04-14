"use strict";

var test = require("tape");

test("Browser test", function (t) {
	t.pass("good");
	t.fail("bad");
	t.end();
});
