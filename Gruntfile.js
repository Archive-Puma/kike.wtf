module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            options: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'www/'
                }]
            }
        },
        cssmin: {
            options: {
                sourceMap: false
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'www/'
                }]
            }
        },
        uglify: {
            options: {
                compress: true,
                sourceMap: false,
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'www/'
                }]
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.!(css|html|js|php)',
                        '**/etc/*',
                        '**/.well-known/*'
                    ],
                    dest: 'www/'
                }],
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'copy']);
};