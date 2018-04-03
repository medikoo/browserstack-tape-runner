"use strict";

var errThrow          = require("es5-ext/error/#/throw")
  , resolve           = require("path").resolve
  , createWriteStream = require("fs").createWriteStream
  , Browserify        = require("browserify")
  , Deferred          = require("deferred")
  , copy              = require("fs2/copy")
  , rmdir             = require("fs2/rmdir");

var htmlPath = resolve(__dirname, "index.html")
  , tapeReporterPath = require.resolve("browserstack-tape-reporter");

module.exports = function (path, filenames) {
	var targetPath = resolve(path, ".browserstack-runner");

	var clear = function () {
		return rmdir(targetPath, { loose: true, recursive: true, force: true });
	};

	var targetHtmlPath = resolve(targetPath, "index.html");
	return copy(htmlPath, targetHtmlPath, { intermediate: true })(function () {
		var writeStream = createWriteStream(resolve(targetPath, "test.js"));
		var browserify = new Browserify();
		browserify.add(filenames);
		browserify.add(tapeReporterPath);
		var bundle = browserify.bundle();
		bundle.pipe(writeStream);

		var deferred = new Deferred();
		bundle.on("error", deferred.reject);
		writeStream.on("error", deferred.reject);
		writeStream.on(
			"close", deferred.resolve.bind(null, { htmlPath: targetHtmlPath, clear: clear })
		);
		return deferred.promise;
	}).catch(function (err) {
		var passErr = errThrow.bind(err);
		return clear()(passErr, passErr);
	});
};
