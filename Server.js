const http = require("http");
const server =  http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end("Ну привет!");
});
server.listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});


