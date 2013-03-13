module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        './src/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    'smush-components':{
      options:{
        fileMap:{
          js: './demo/x-tag-components.js',
          css: './demo/x-tag-components.css'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-smush-components');
  
  grunt.registerTask('build', ['smush-components', 'jshint'])
  grunt.registerTask('default', ['jshint']);

};
