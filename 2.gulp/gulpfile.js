const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

//gulp first
gulp.task(
    'first',(cb)=>{
        console.log('first gulp 执行了');
        //获取要处理的文件
        gulp.src('./src/css/index.css')
            .pipe(gulp.dest('dist/css'));
        cb();
    }
);

// gulp htmlmin
// 压缩html
gulp.task(
    'htmlmin',
    (cb)=>{
        gulp.src('./src/*.html')
            // 是否压缩空格
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dest'));
        cb();
    }
)