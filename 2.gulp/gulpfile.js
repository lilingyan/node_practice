const gulp = require('gulp');

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