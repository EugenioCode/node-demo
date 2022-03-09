const fs = require('fs')

fs.open('./fs.text', 'r+', (err) => {
    if(err) {
        return console.error(err)
    }
    console.log('文件打开成功')
})