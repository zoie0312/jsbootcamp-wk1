module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
     files: ['Gruntfile.js',
             'public/*.js',
           //  'views/contactlist.hbs',
             'reporter.js',
             'app.js'
            ],
      options: {
        reporter: 'reporter.js'
      }
    },
    copy: {
      main: {
        files: [
          {src: ['bower_components/**/*'], dest: 'public/'}

        ]
      },
    },
    watch: {
      files: ['*/*.*'],
      //tasks: ['jshint'],
      options: {
        livereload: 3572,
      },
    },
    githooks: {
      all: {'pre-commit': 'copy_bower'}
    },
    mocha_phantomjs: {
      all: ["tests/**/*.html"],
      options: {
        reporter: "xunit",
        output: "./mocha_result.xml"
      }
    },
    clean: ["node_modules", "bower_components", "public/bower_components"]
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install-task');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['bower_install', 'copy']);
  grunt.registerTask('bower_copy', ['copy']);
  grunt.registerTask('test', ['mocha_phantomjs']);

};