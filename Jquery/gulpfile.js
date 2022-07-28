const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('node-sass'))
const babel = require('gulp-babel')
const browserSyn = require('browser-sync').create()
const reload = browserSyn.reload 

function tarefasCSS(callback){

     gulp.src(['./vendor/**/*.css',
                      './node_modules/@fortawesome/fontawesome-free/css/all.css',
                      './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'])             
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) //libs.min.css
        .pipe(gulp.dest('./dist/css'))

        return callback()
}

function tarefasSASS(cb){

    gulp.src('./src/scss/*.scss')
    .pipe(sass()) //transforma o sass em css
    .pipe(gulp.dest('./dist/css'))

    cb()
}

function tarefasJS(callback){

     gulp.src(['./vendor/jquery/jquery-3.6.0.min.js',
                    './vendor/bootstrap/js/bootstrap.min.js',
                    './vendor/owl/js/owl.js',
                    // './vendor/jquery-mask/jquery.mask.min.js',
                    // './vendor/jquery-ui/jquery-ui.min.js',
                    './src/js/custom.js'
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

gulp.task('serve', function(){
    browserSyn.init({
        server:{
            baseDir:"./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})

const process = parallel(tarefasHTML, tarefasJS, tarefasCSS, tarefasSASS, tarefasImagem)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.html = tarefasHTML
exports.sass = tarefasSASS

exports.default = process