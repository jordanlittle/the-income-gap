module.exports = function(grunt) {

	grunt.initConfig({

		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
				    'www/style.css': 'build/build.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'www/style.css': 'www/style.css'
				},
				options: {
					browsers: ['last 2 versions']
				}
			}
		},

		bake: {
	        dist: {
	            options: {
	                content: "config.json"
	            },	 
	            files: {
	                "www/index.html" : "build/homepage.html",
	            }
	        }
	    },

		watch: {
	        styles: {
                files: ['build/*.scss', 'build/**/*.html'],
                tasks: ['sass', 'autoprefixer', 'bake'],
                options: {
                    spawn: false
                }
            }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-bake');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default', ['watch']);
};