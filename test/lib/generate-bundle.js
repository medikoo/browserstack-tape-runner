"use strict";

var Deferred       = require("deferred")
  , resolve        = require("path").resolve
  , unlink         = Deferred.promisify(require("fs").unlink)
  , test           = require("tape")
  , generateBundle = require("../../lib/generate-bundle");

test("Generate bundle", function (t) {
	var playgroundPath = resolve(__dirname, "../_playground");

	generateBundle([resolve(playgroundPath, "client-test.js")])(function (data) {

		global.window = { BrowserStack: { post: Function.prototype } };
		require("../../lib/test.bundle.js");
		return Deferred.delay(function () {
			delete global.window;
			t.equals(global.fileBundled, "bundled");
			return data.clear();
		}, 0)();
	}).done(t.end, t.end);
});
