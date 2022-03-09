const http = require('http');
const fs = require('fs');
const queryString = require('querystring')

http.createServer((req, res) => {
    let message = ''
    if(req.url === '/') {
        message = 'this is homepage'
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        })
        res.end(message)
    } else if(req.url === '/login') {
        message = fs.readFileSync('./template/login.html').toString()
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF8'
        })
        res.end(message)
    } else if(req.url === '/account') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            body = queryString.parse(body)
            if(body.username && body.pwd) {
                res.writeHead(302, {
                    'Location': '/'
                })
            } else {
                res.writeHead(302, {
                    'Location': '/login'
                })
            }
            res.end()

        })
    }

}).listen(3000, () => {
    console.log('serve is running on port 3000')
})
