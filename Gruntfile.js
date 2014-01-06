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
      },
      imgResp: {
        files: [
          'img/src/*.{png,jpg,jpeg,gif}'
        ],
        tasks: ['responsive_images']
      },
      imgComp: {
        files: [
          'img/resp/*.{png,jpg,jpeg,gif}'
        ],
        tasks: ['imagemin']
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
      all: ['Gruntfile.js', 'js/src/*.js']
    },
    jasmine : {
      src : 'js/src/*.js',
      options : {
        specs : 'js/spec/*.js'
      }
    },
    uglify: {
      target: {
        files: {
          'js/main.min.js': ['js/src/main.js', 'js/src/plugins.js']
        }
      }
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
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
              width: 320
            },
            {
              width: 640
            },
            {
              width: 1024
            },
            {
              width: 1024,
              suffix: '_x2'
            }
          ]
        },
        files: [{
          expand: true,
          cwd: 'img/src',
          src: ['*.{png,jpg,jpeg,gif}'],
          dest: 'img/resp'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/resp',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: 'img'
        }]
      }
    }
  });

  grunt.registerTask('default', ['browser_sync', 'watch', 'responsive_images', 'imagemin', 'jasmine', 'uglify']);

};