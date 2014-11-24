module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      keepalive: {
        options: {
          port: 8989,
          host: "*",
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("start", ["connect:keepalive"]);
};
