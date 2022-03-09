const http = require('http')
http.createServer((req, res) => {
    let message = ''
    if (req.url == '/test') {
        message = '这是测试页面'
    } else {
        message = 'this is a page'
    }
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
    res.end(message);
}).listen(3000, () => {
    console.log('serve is running on port 3000')
})