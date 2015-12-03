/**
 * Created by OK8721 on 12/2/2015.
 */
'use strict';
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            compile: {
                options: {
                    sourceMap: true,
                    presets: ['es2015']
                },
                files: {
                    'js/dist/Variable.js': 'js/src/Variable.es6',
                    'js/dist/Method.js': 'js/src/Method.es6',
                    'js/dist/ConstructES6Class.js': 'js/src/ConstructES6Class.es6'
                }
            }
        },
        //nodeunit: {
        //    tasks: ['test/test.js']
        //},
        clean: {
            test: ['js/dist/**']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('default', ['clean', 'babel']);
    //grunt.registerTask('default', ['clean', 'babel']);
    //grunt.registerTask('default', ['clean', 'babel', 'nodeunit', 'clean']);
};