# generator-typescript-library [![Build Status](https://travis-ci.org/hourliert/generator-typescript-library.svg)](https://travis-ci.org/hourliert/generator-typescript-library)

## Getting Started

### Install

```bash
npm install -g yo generator-typescript-library
yo typescript-library
```

### Git hook
This project has a `pre-commit` git hook to compile the library to be production ready before committing. To use it, you need to first initialize a git repository in the generated project folder with `git init` and then run `npm install` (still into the generated project folder) to install the git hook.

### Structure

The scaffolded project has this structure:
```
.
├── .codeclimate.yml
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── .vscode
│   └── settings.json
├── LICENSE
├── README.md
├── gulpfile.js
├── lib
│   ├── all.d.ts
│   ├── core.ts
│   └── test-generator.ts
├── package.json
├── scripts
│   └── dts-bundle.js
├── test
│   └── core.ts
├── tsconfig.json
└── tsd.json
```

### Gulp tasks

* `ci` cleans the project, install type definition files and run unit tests
* `gulp` runs the `ci` task then it compiles the project in the `./build` folder and finally generates the type definition files of the library in the `./build` folder.
* `test` and `test:watch` run unit tests whether in watch mode or not
* `scripts:dev` and `scripts:dev:watch` compiles typescript files in dev mode whether in watch mode or not. (compiled files are not in `./build` folder)

## License

MIT
