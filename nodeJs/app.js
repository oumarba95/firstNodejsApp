let Event = require('events');
let http = require('http');
let App = {
    start : function (port){
       let EventOne = new Event();
        http.createServer((request,response) => {
           response.writeHead(200,{
               'Content-type':'text/html ; charset=utf-8'
           });
           if(request.url === '/') {
              EventOne.emit('root',response);
           }
           response.end();
       }).listen(8080);
       return EventOne;
    }
}
module.exports = App;