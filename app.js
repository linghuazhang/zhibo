const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run()

var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html',(err,data)=>{
      if(err){
          console.log(err);
          response.end();
      }else{
          response.write(data);
          response.end;
      }
  })
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');