'use strict';

module.exports = function(grunt){

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          'sass/*.sass',
          'sass/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'compressed'
        }
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