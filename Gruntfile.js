'use strict';

module.exports = function(grunt){

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: [
          'js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  grunt.registerTask('default', ['watch']);

};