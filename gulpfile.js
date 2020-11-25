const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', () => {
  return gulp
    .src('src/sass/**/*.+(scss|sass)')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min', prefix: '' }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('libs', function () {
  return gulp.src('src/js/libs/*.js').pipe(gulp.dest('dist/js/libs'));
});

// gulp.task('scripts', function () {
//   return gulp
//     .src([
//       'src/js/slick.min.js',
//       'src/js/script.js', //тут нужно подключать библиотеки
//     ])
//     .pipe(concat('scripts.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'))
//     .pipe(browserSync.reload({ stream: true }));
// });

//final
gulp.task('scripts', function () {
  return gulp
    .src('src/js/script.js')
    .pipe(rename('script.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('fonts', function () {
  return gulp.src('src/icons/**/*').pipe(gulp.dest('dist/icons'));
});

gulp.task('icons', function () {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function () {
  return gulp.src('src/img/**/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
  gulp.watch('src/*.html').on('change', gulp.parallel('html'));
  gulp.watch('src/js/**/*.js', gulp.parallel('scripts'));
});

gulp.task(
  'default',
  gulp.parallel(
    'watch',
    'server',
    'styles',
    'scripts',
    'libs',
    'fonts',
    'icons',
    'html',
    'images'
  )
);
