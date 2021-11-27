const fs = require('fs');
const path = require('path');

//可以避免node执行位置变换导致文件无法找到的问题
fs.readFile(
    path.join(__dirname,'/attach/1.txt'),
    'utf8',
    (err , txt) => {
        console.log('读取失败:'+err);

        //可以判断，如果err为空，再输出文件内容

        console.log(txt);
    }
);