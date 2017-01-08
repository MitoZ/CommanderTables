'use strict';
module.exports = function (grunt) {
  let pathToContent = '../',
    pathToSourceSVG = '../icons/',
    pathToSpritePlace = pathToContent + '/svg_sprite/',
    svgStoreFilesOption = {},
    svg2stringFilesOption = {},
    pathToCustomIconsFolder = '../../../Images/Custom_Icons';
  
  svgStoreFilesOption[pathToSpritePlace + '/sprite.svg'] = [pathToSourceSVG + '**/*.svg', pathToCustomIconsFolder + '**/*.svg'];
  svg2stringFilesOption[pathToSpritePlace + '/sprite.js'] = [pathToSpritePlace + '/sprite.svg'];
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    //watch: {
    //    less: {
    //        files: [lessFolderPath + '*.less'],
    //        tasks: ['less', 'postcss'],
    //        options: {
    //            spawn: false
    //        }
    //    },
    //    js: {
    //        files: [
    //            jsSourcePath + '*!/!**!/!*.js',
    //            '!' + jsSourcePath + 'Libs/Kendo/!**.js',
    //            '!' + jsSourcePath + 'Libs/!**!/!*.min.js',
    //            '!' + jsSourcePath + 'Libs/ckeditor/!**!/!*.js'//,
    //            //'!' + jsSourcePath + 'Configs/!**.js'
    //        ],
    //        tasks: ['uglify:current_file'],
    //        options: {
    //            spawn: false
    //        }
    //    }
    //},
    
    svgstore: {
      options: {
        prefix: 'ico-',
        svg: {
          style: 'display: none;'
        },
        includedemo: true
      },
      default: {
        files: svgStoreFilesOption
      }
    },
    svg2string: {
      default: {files: svg2stringFilesOption}
    }
  });
  
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-svg2string');
  
  grunt.registerTask('default', [
    'svgstore',
    'svg2string'
  ]);
};