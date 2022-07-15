const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tarefasCSS(cb){

    return gulp.src(['./vendor/**/*.css',
                      './css/style.css',
                      './node_modules/@fortawesome/fontawesome-free/css/all.css',
                      './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'])
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
                    './vendor/jquery-ui/jquery-ui.min.js',
                    './js/custom.js'
                    ])
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
}

function tarefasdefault(){
    return  tarefasCSS(),
            tarefasJS(),
            tarefasImagem()

}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.default = tarefasdefault