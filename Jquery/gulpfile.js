const {parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel') 

function tarefasCSS(callback){

     gulp.src(['./vendor/**/*.css',
                      './css/style.css',
                      './node_modules/@fortawesome/fontawesome-free/css/all.css',
                      './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'])             
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))

        return callback()
}

function tarefasJS(callback){

     gulp.src(['./vendor/jquery/jquery-3.6.0.min.js',
                    './vendor/bootstrap/js/bootstrap.min.js',
                    './vendor/owl/js/owl.js',
                    './vendor/jquery-mask/jquery.mask.min.js',
                    './vendor/jquery-ui/jquery-ui.min.js',
                    './js/custom.js'
                    ])
            .pipe(babel({
                comments: false,
                presets: ['@babel/env']
            }))        
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist/js'))

            return callback()
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
}



function tarefasHTML(callback){

             gulp.src('src/*.html')
          .pipe(htmlmin({ collapseWhitespace: true }))
          .pipe(gulp.dest('dist'));

          return callback()

}

function tarefasdefault(){
    return  tarefasCSS(),
            tarefasJS(),
            tarefasImagem(),
            tarefasHTML()

}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.html = tarefasHTML


exports.default = parallel(tarefasHTML, tarefasJS, tarefasCSS)