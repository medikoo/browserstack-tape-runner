"use strict";

var aFrom           = require("es5-ext/array/from")
  , ensureObject    = require("es5-ext/object/valid-object")
  , toPlainObject   = require("es5-ext/object/normalize-options")
  , promisify       = require("deferred").promisify
  , runBrowserstack = promisify(require("browserstack-runner").run)
  , generateBundle  = require("./lib/generate-bundle");

module.exports = function (filenames /* , config*/) {
	var config = toPlainObject(arguments[1]);

	return generateBundle(aFrom(ensureObject(filenames)))(function (data) {
		// eslint-disable-next-line camelcase
		config.test_path = data.htmlPath;
		return runBrowserstack(config)(function (report) {
			return data.clear()(report);
		});
	});
};
