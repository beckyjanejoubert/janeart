module.exports = function(grunt){
    "use strict";

    var gruntConfig = {
        connect:{
            options:{
                base:"./"
            },
            devserver:{
                options:{
                    port: 9000,
                    keepalive: true
                }
            }
        },
        open:{
            devserver:{
                path:"http://localhost:9000"
            }
        }
    }
    grunt.loadNpmTasks("grunt-contrib-connect");
    //grunt.loadNpmTasks("grunt-open");

    grunt.initConfig(gruntConfig);

    grunt.registerTask("default", ["connect:devserver"]);

}

