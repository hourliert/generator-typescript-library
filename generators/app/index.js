'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    
    this.argument('appname', { type: String, required: false });
    
    this.option('skip-install', {
      desc:     'Whether dependencies should be installed',
      defaults: false,
    });

    this.option('skip-install-message', {
      desc:     'Whether commands run should be shown',
      defaults: false,
    });
    
    this.sourceRoot(path.join(path.dirname(this.resolved), 'templates'));
  },
  
  init: function () {
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = _.kebabCase(this.appname);
    
    console.log(this.appname);
  },
  
  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stupendous ' + chalk.red('Typescript Library') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'ghUser',
        message: 'What is your GitHub username?'
      }
    ];

    this.prompt(prompts, function (props) {
      this.ghUser = props.ghUser;

      done();
    }.bind(this));
  },

  app: function () {
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.template('_index.js', 'index.js');
    
    this.copy('codeclimate.yml', '.codeclimate.yml');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
    this.copy('travis.yml', '.travis.yml');
    this.copy('LICENSE', 'LICENSE');
    this.copy('tsconfig.json', 'tsconfig.json');
    this.copy('tsd.json', 'tsd.json');
    this.copy('gulpfile.js', 'gulpfile.js');
    
    this.mkdir('.vscode');
    this.directory('vscode', '.vscode');
    
    this.mkdir('lib');
    this.copy('lib/core.ts', 'lib/core.ts');
    this.copy('lib/all.d.ts', 'lib/all.d.ts');
    this.template('lib/library-name.ts', 'lib/' + this.appname + '.ts');
    
    this.mkdir('test');
    this.directory('test', 'test');
    
    this.mkdir('scripts');
    this.template('scripts/dts-bundle.js', 'scripts/dts-bundle.js');
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-install-message'],
    });
  }
});
