const fs = require('fs');

//路径是按启动node的文件位置为准的
fs.readFile(
    './1.基础/attach/1.txt',
    'utf8',
    (err , txt) => {
        console.log(err);

        //可以判断，如果err为空，再输出文件内容

        console.log(txt);
    }
);