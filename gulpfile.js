const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// CSS dosyalarını minimize et
gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'));
});

// HTML dosyalarını minimize et
gulp.task('minify-html', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// JavaScript dosyalarını minimize et
gulp.task('minify-js', () => {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

// Resimleri optimize et
gulp.task('optimize-images', () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'));
});

// Tüm görevleri çalıştır
gulp.task('build', gulp.parallel('minify-css', 'minify-html', 'minify-js', 'optimize-images')); 