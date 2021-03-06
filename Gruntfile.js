module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'app.js': ['one.js', 'two.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};