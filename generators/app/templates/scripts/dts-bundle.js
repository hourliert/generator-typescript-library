var dts = require('dts-bundle');

dts.bundle({
    name: '<%= appname %>',
    main: 'build/<%= appname %>.d.ts'
});