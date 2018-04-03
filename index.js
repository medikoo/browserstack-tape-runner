"use strict";

var aFrom           = require("es5-ext/array/from")
  , ensureObject    = require("es5-ext/object/valid-object")
  , toPlainObject   = require("es5-ext/object/normalize-options")
  , ensureString    = require("es5-ext/object/validate-stringifiable-value")
  , promisify       = require("deferred").promisify
  , runBrowserstack = promisify(require("browserstack-runner").run)
  , generateBundle  = require("./lib/generate-bundle");

module.exports = function (path, filenames/*, config*/) {
	path = ensureString(path);
	var config = toPlainObject(arguments[2]);

	return generateBundle(path, aFrom(ensureObject(filenames)))(function (data) {
		// eslint-disable-next-line camelcase
		config.test_path = data.htmlPath;
		return runBrowserstack(config)(function (report) {
			return data.clear()(report);
		});
	});
};
