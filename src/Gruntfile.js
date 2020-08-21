module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true,
                interval: 2000
            },
            site: {
                files: {
                    '../public/js/site.min.js': ['assets/js/**/*.js']
                }
            },
            vendor: {
                files: {

                    '../public/js/vendor.min.js': [
                        "node_modules/jquery/dist/jquery.slim.min.js",
                        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
                        "node_modules/material-design-lite/material.min.js",
                        "node_modules/animejs/lib/anime.min.js",
                        // 'node_modules/aos/dist/aos.js'
                    ]
                }
            }
        },
        sass: {
            site: {
                files: {
                    '../public/css/style.min.css': 'assets/sass/style.scss',
                }
            },
            vendor: {
                files: {
                    '../public/css/vendor.min.css': [
                        'node_modules/material-design-lite/material.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        // 'node_modules/aos/dist/aos.css'

                    ]
                }
            }
        },

        watch: {
            js:{
                files: ['assets/js/**/*.js'],
                tasks: ['uglify:site']
            },
            sass:{
                files: ['assets/sass/**/*'],
                tasks: ['sass:site']
            }
          },


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


};