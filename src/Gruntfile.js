module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                sourceMap: true,
                interval: 2000
            },
            site: {
                files: {
                    '../webroot/js/site.min.js': ['src/js/**/*.js']
                }
            },
            vendor: {
                files: {

                    '../webroot/js/vendor.min.js': [
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
                    '../webroot/css/style.min.css': 'src/sass/style.scss',
                }
            },
            vendor: {
                files: {
                    '../webroot/css/vendor.min.css': [
                        'node_modules/material-design-lite/material.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        // 'node_modules/aos/dist/aos.css'

                    ]
                }
            }
        },

        watch: {
            js:{
                files: ['src/js/**/*.js'],
                tasks: ['uglify:site']
            },
            sass:{
                files: ['src/sass/**/*'],
                tasks: ['sass:site']
            }
          },


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


};