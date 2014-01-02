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
        tasks: ['newer:lint5']
      },
      css: {
        files: [
          'css/*.css'
        ],
        tasks: ['newer:csslint']
      },
      sass: {
        files: [
          'sass/*.sass',
          'sass/*.scss'
        ],
        tasks: ['newer:compass']
      },
      js: {
        files: [
          'js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['newer:jshint']
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
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', 'js/*.js']
    },
    browser_sync: {
      bsFiles: {
        src : [
          'css/*.css',
          'img/*.jpg',
          'img/*.png',
          'img/*.gif',
          'js/*.js',
          '*.php',
          '*.html'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: ''
        }
        // proxy: {
        //   host: "local.dev",
        //   port: 8001
        // }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'img'
        }]
      }
    }
  });

  grunt.registerTask('default', ['browser_sync', 'watch']);

};