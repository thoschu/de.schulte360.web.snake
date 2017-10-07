module.exports = function (grunt) {

    grunt.initConfig({
        buddyjs: {
            src: ['server.js'],
            options: {
                // ...
            }
        },
    });

    grunt.loadNpmTasks('grunt-buddyjs');

    grunt.registerTask('default', ['buddyjs']);
};