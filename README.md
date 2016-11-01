# H5WithAngularjs



//导入工具包 require('node_modules里对应模块')

var gulp = require('gulp'), //本地安装gulp所用到的地方

    cssmin = require('gulp-minify-css'),
    
    htmlmin = require('gulp-htmlmin'),
    
    autoprefixer = require('gulp-autoprefixer'),
    
    processhtml = require('gulp-processhtml'),     /*You might need to change some attributes in your html, when you're releasing for a different environment.
    Using this plugin, you can*/
    
    // compass = require('gulp-compass'),          // compass编译Sass, 生成雪碧图
    
    // sass = require('gulp-sass'),                // sass编译
    
    // sourcemaps = require('gulp-sourcemaps'),    // sass地图
    
    // browserSync = require('browser-sync'),      // 浏览器同步
    
    // reload = browserSync.reload,                // 自动刷新
    
    // rename = require('gulp-rename'),            // 重命名文件
    
    // jshint = require('gulp-jshint'),            // JS语法检测
    
    // replace = require('gulp-replace'),          // 字符串替换
    
    uglify = require('gulp-uglify'),            // JS丑化
    
    concat = require('gulp-concat'),            // JS拼接
    
    clean = require('gulp-clean'),              // 清空文件夹
    
    notify = require('gulp-notify');            // 更新通知
    
