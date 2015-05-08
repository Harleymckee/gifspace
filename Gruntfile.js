
module.exports = function(grunt) {

  grunt.initConfig({





  sass: {                              // Task
    dist: {                            // Target
      files: {                         // Dictionary of files
        'client/style.css': 'client/style.scss'       // 'destination': 'source'
      }
    }
  },






    watch: {
      css: {
        files: ['client/**/*.css', 'client/**/*.scss'],
        tasks: ['sass'] // 'cssmin'
      },

      js: {
        files: ['client/**/*.js']
     //   tasks: ['sass']
      }
    },





  	nodemon: {
      dev: {
        script: 'server.js'
      }
    },



    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   




  });



  grunt.loadNpmTasks('grunt-contrib-sass');
//  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');




    grunt.registerTask('default', ['sass', 'concurrent']); //'jshint' 'uglify' 'cssmin'

};