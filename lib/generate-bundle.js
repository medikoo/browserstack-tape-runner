"use strict";

var resolve           = require("path").resolve
  , createWriteStream = require("fs").createWriteStream
  , Browserify        = require("browserify")
  , Deferred          = require("deferred")
  , unlink            = Deferred.promisify(require("fs").unlink)

  , bundlePath = resolve(__dirname, "test.bundle.js")
  , htmlPath = resolve(__dirname, "index.html")
	, tapeReporterPath = require.resolve("browserstack-tape-reporter");

module.exports = function (filenames) {
	var browserify = new Browserify(), deferred = new Deferred(), bundle
	  , writeStream = createWriteStream(bundlePath);

	browserify.add(filenames);
	browserify.add(tapeReporterPath);
	bundle = browserify.bundle();
	bundle.pipe(writeStream);
	bundle.on("error", deferred.reject);
	writeStream.on("error", deferred.reject);
	writeStream.on("close", deferred.resolve.bind(null, {
		htmlPath: htmlPath,
		clear: function () {
			return unlink(bundlePath);
		}
	}));
	return deferred.promise;
};
