const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const csso = require("gulp-csso");
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');


// Local server (gulp watch)

gulp.task('style', function () {
    return gulp.src('source/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('source/css'));
});

gulp.task('watch', function () {
    browserSync.init ({
        server: 'build/'
    });
    gulp.watch('source/sass/**/*.scss', gulp.series('minify-css'));
    gulp.watch('source/*.html', gulp.series('html'));
});


// Minify CSS/HTML/JS

gulp.task('minify-css', function () {
    return gulp.src('source/sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(browserSync.stream())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('build/css'))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify', function () {
    return gulp.src('source/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-html', function () {
    return gulp.src('source/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(posthtml([
            include()
        ]))
        .pipe(rename('index.min.html'))
        .pipe(gulp.dest('source'));
});

gulp.task('minify-js', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});


// Minify images/convert WebPack/build sprite

gulp.task('images', function () {
    return gulp.src('./img/**/*.{png,jpg,svg}')
        .pipe(imagemin([
            imagemin.optipng({optimizationlevel: 3}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.svgo()
        ]))
    .pipe(gulp.dest('source/img'));
});

gulp.task('webp', function () {
    return gulp.src('source/img/**/*.{png,jpg}')
        .pipe(webp())
        .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function () {
    return gulp.src('source/img/icons/icon-*.svg')
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('build/img'));
});

gulp.task('html', function () {
    return gulp.src('source/*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('build'));
});

gulp.task('htmlimages', function () {
    return gulp.src('source/*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(rename('index.include.html'))
        .pipe(gulp.dest('source'));
});


// Build

gulp.task('copy', function () {
    return gulp.src([
        'source/fonts/**/*.{woff,woff2}',
        'source/img/**/*',
        'source/js/**'
    ], {
        base: 'source'
    })
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
    return del('./build');
});

gulp.task('build', gulp.series(
    'clean',
    'copy',
    'sprite',
    'images',
    'html',
    'htmlimages',
    'minify',
    'minify-html',
    'minify-css',
    'minify-js'
));