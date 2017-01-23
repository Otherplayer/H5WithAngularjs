
// 路径变量
var path = {
    // 开发环境
    dev: {
        com: {
            strip:'business-trip',
            expense:'business-expense',
            document:'business-document',
            deal:'document-deal',
            meeting:'meeting',
            binding:'binding',
            postal:'postal',
            rate:'exchange',
            news:'news',
            fun:'functionlist',
            gt:'gt',
            gm:'gm',
            wea:'weather',
            info:'personalinformation',
            opinion:'publicopinion',
            opinionhot:'publicopinionhot',
            opinionstatis:'publicopinionstatistics',
            opinionset:'publicopinionset',
            opinionnews:'publicopinionnews',
            groupinfo:'groupinfo',
            groupdetail:'groupdetail',
            groupcom:'groupcom',
            groupcominfo:'groupcominfo'
        },
        common: 'src/app/common',
        sass: './dev/sass',
        css: './dev/css',
        image: 'src/app/images'
    },
    dist: {
        css: './dist/css',
        common: 'dist/app/common',
        image: 'dist/app/images'
    }
};



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



/**
 * Build util GIF CSS and JS
 */

gulp.task('build:css', function () {
    gulp.src(path.dev.common + '/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(path.dist.common));
});

gulp.task('build:js', function () {
    gulp.src(path.dev.common +  '/*.js')
    // .pipe(uglify({compress: false}))
        .pipe(concat('app.js'))//合并后的文件名
        .pipe(gulp.dest(path.dist.common));
});

gulp.task('copy:gif', function () {
    gulp.src(path.dev.image +  '/*.*')
        .pipe(gulp.dest(path.dist.image));
});



/**
 * Build HTML and JS
 */

var htmlminOptions = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
};
var jsminOptions = {
    mangle: false,//类型：Boolean 默认：true 是否修改变量名
    // mangle: {except: ['require' ,'exports' ,'module' ,'$','JSObjectBridge','jsBack','jsOpenNewpage']},//排除混淆关键字
    compress: true,//类型：Boolean 默认：true 是否完全压缩
    preserveComments: 'all' //保留所有注释all
};
var environmentOpts = { /* plugin options */ };

gulp.task('js-html-min', function () {
    for (var key in path.dev.com){
        var target = path.dev.com[key];
        //html
        gulp.src('src/app/components/' + target + '/*.html')
            .pipe(processhtml(environmentOpts))
            .pipe(htmlmin(htmlminOptions))
            .pipe(gulp.dest('dist/app/components/' + target));
        //js
        gulp.src('src/app/components/' + target + '/*.js')
            .pipe(uglify(jsminOptions))
            .pipe(gulp.dest('dist/app/components/' + target));
    }
});


/**
 * 清空文件夹
 */

gulp.task('build:clean', function() {
    gulp.src('dist', {read: false})
        .pipe(clean())
        .pipe(notify({ message: '清空文件夹完成',wait: true }));
});

/**
 * Create a distribution package
 */

gulp.task('build', ['build:css', 'build:js', 'copy:gif', 'js-html-min'], function () {
    console.log('build done');
});

gulp.task('dist', ['build:clean', 'build'], function () {
    console.log('dist done');
});



gulp.task('default',['build']);



// 通配符路径匹配示例：
// “src/a.js”：指定具体文件；
// “*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
//  “**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
// “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
//  “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
