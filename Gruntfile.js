module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [
                    {
                        dest: 'dist/flexinate.css',
                        src: 'src/flexinate.scss'
                    },
                ],
            },
            options: {
                outputStyle: 'expanded',
                identType: 'spaces',
                identWidth: 4
            }
        },
        autoprefixer: {
            dist: {
                src: 'dist/flexinate.css', // -> src/css/file1.css, src/css/file2.css
                dest: 'dist/flexinate.css', // -> dest/css/file1.css, dest/css/file2.css
                options: {
                    expand: true
                }
            },
            distMin: {
                src: 'dist/flexinate.css', // -> src/css/file1.css, src/css/file2.css
                dest: 'dist/flexinate.min.css', // -> dest/css/file1.css, dest/css/file2.css
                options: {
                    expand: true
                }
            },
            options: {
                browsers: ['last 2 versions', 'ie 10', 'ie 11', 'iOS 7']
            }
        },
        watch: {
            sass: {
                files: ['src/{,*/}*.scss'],
                tasks: ['sass','autoprefixer']
            }
        }
    });

    grunt.registerTask('build', [
        'sass',
        'autoprefixer'
    ]);

    grunt.registerTask('dev', [
        'sass',
        'autoprefixer',
        'watch'
    ]);

    grunt.registerTask('default', function(){
        console.log('To start dev do "grunt dev"');
        console.log('To generate a build version do "grunt build" and check dist folder');
    });
};