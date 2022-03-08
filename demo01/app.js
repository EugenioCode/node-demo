const http = require('http')
http.createServer((req, res) => {
    let message = ''
    if (req.url == '/test') {
        message = '这是测试页面'
    } else {
        message = 'this is a page'
    }
    res.end(message);
}).listen(3000, () => {
    console.log('serve is running on port 3000')
})