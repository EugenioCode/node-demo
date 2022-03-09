const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let message = ''
    if(req.url === '/') {
        message = 'this is homepage'
    } else if(req.url === '/login') {
        message = fs.readFileSync('./template/login.html').toString()
    } else if(req.url === '/account') {
        console.log(req)
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF8'
    })
    res.end(message)
}).listen(3000, () => {
    console.log('serve is running on port 3000')
})
