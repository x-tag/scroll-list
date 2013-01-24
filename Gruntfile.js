module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        '<%= meta.src %>',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);

};
