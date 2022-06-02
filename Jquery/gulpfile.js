const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb){

    return gulp.src('./vendor/**/*.css' )
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))

}

function tarefasJS(){

    return gulp.src(['./vendor/jquery/jquery-3.6.0.min.js',
                    './vendor/bootstrap/js/bootstrap.min.js',
                    './vendor/owl/js/owl.js',
                    './vendor/jquery-mask/jquery.mask.min.js',
                    './vendor/jquery-ui/jquery-ui.min.js'
                    ])
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/js'))
}


exports.styles = tarefasCSS
exports.scripts = tarefasJS