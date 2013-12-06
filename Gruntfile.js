'use strict';

module.exports = function(grunt){

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: [
          '*.html'
        ],
        tasks: ['lint5']
      },
      css: {
        files: [
          'css/*.css'
        ],
        tasks: ['csslint']
      },
      sass: {
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
    lint5: {
      views: '',
      templates: {
        'index.html': null
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css']
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