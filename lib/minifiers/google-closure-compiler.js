const pMapSeries = require('p-map-series');
const {minify} = require('uglify-js');
const {measure} = require('../utils');
const ClosureCompiler = require('google-closure-compiler').compiler;
const tempy = require('tempy');
const path = require('path');
const fs = require('fs');

ClosureCompiler.prototype.$run = function () {
	return new Promise((resolve, reject) => {
		this.run((exitCode, stdOut, stdErr) => {
			const result = { exitCode, stdOut, stdErr };
			if (exitCode > 0) {
				const error = new Error('Error compressing');
				Object.assign(error, result);
				reject(error);
				return;
			}

			resolve(fs.readFileSync(this.outputPath));
		});
	});
};
const tempdir = tempy.directory();

module.exports = {
	name: 'google-closure-compiler',
	repo: 'https://github.com/google/closure-compiler-npm/tree/master/packages/google-closure-compiler',
	minify: async (file) => {
		const randHash = Math.random().toString(36).substring(7);
		const outputPath = path.join(tempdir, randHash + '.js');

		const compilation = new ClosureCompiler({
			js: file.path,
			compilation_level: 'SIMPLE',
			js_output_file: outputPath,
			debug: true
		});

		compilation.outputPath = outputPath;

		const result = await measure({
			name: 'google-closure-compiler',
			minify: () => compilation.$run(),			
		});

		return result;
	},
};
