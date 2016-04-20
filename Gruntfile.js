module.exports = function (grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'styles/prototype-overrides.css': 'styles/prototype-overrides.scss',
                    'styles/prototype-styles.css': 'styles/prototype-styles.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['styles/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};