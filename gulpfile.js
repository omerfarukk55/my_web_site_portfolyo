import gulp from 'gulp';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';

// CSS dosyalarını minimize et
export const minifyCSS = () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets/css'));
};

// HTML dosyalarını minimize et
export const minifyHTML = () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

// JavaScript dosyalarını minimize et
export const minifyJS = () => {
  return gulp.src('assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(terser())
    .pipe(gulp.dest('dist/assets/js'));
};

// Resimleri optimize et
export const optimizeImages = () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'));
};

// Tüm görevleri çalıştır
export const build = gulp.parallel(minifyCSS, minifyHTML, minifyJS, optimizeImages);

export default build; 