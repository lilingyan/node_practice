const fs = require('fs');

//路径是按启动node的文件位置为准的
fs.readFile(
    './1.基础/attach/1.txt',
    'utf8',
    (err , txt) => {
        console.log('读取失败:'+err);

        //可以判断，如果err为空，再输出文件内容

        console.log(txt);
    }
);

//如果没有文件，会自动创建
fs.writeFile(
    './1.基础/attach/1.txt',
    '我是写入内容',
    (err) => {
        if(err == null){
            console.log('写入成功');
            return;
        }
        console.log('写入失败:'+err);
    }
);