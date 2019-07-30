var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

function sampleRoot(staticPath,request,response){
    console.log(staticPath)
    var pathObj = url.parse(request.url, true)
    console.log(pathObj)

    if(pathObj.pathname === '/'){
        pathObj.pathname += 'test.html'
    }

    var filePath = path.join(staticPath, pathObj.pathname)
    console.log(filePath)
    fs.readFile(filePath, 'binary', function(err, fileContent){
        if(err){
            console.log('404')
            response.writeHead(404, 'not found')
            response.end('<h1>404 not found </h1>')
        }else{
            console.log('ok')
            response.writeHead(200, 'success')
            response.write(fileContent, 'binary')
            response.end()
        }

    })
}

var server = http.createServer(function(request, response){
    sampleRoot(path.join(__dirname + '/sample'),request,response)
})
server.listen(9000)

console.log('visit on http://localhost:9000')