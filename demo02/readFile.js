const fs = require('fs')
// 异步读取文件
fs.readFile('./fs.text', (err, data) => {
    if(err) {
        console.error(err)
    } else {
        console.log('异步读取文件:', data.toString())
    }
})

// 同步读取文件
const data = fs.readFileSync('fs.text')
console.log('同步读取文件', data.toString())