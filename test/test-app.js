'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('typescript-library:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments(['test-generator'])
      .withOptions({ skipInstall: true })
      .withPrompts({ ghUser: 'hourliert' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      'README.md',
      '.codeclimate.yml',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'tsconfig.json',
      'tsd.json',
      'gulpfile.js',
      '.vscode/settings.json',
      'lib/core.ts',
      'lib/all.d.ts',
      'lib/test-generator.ts',
      'test/core.ts',
      'scripts/dts-bundle.js'
    ]);
  });
});
