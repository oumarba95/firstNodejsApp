let app = require('express')();

app.get('/',(request,response)=>{
  response.send("Bienvenue dans la racine");
});
app.get('/login',(request,response)=>{
  response.send("Vous etes dans la page d'authentification.");
});
app.listen(8080)

/*let fs = require('fs');
let file = 'video.mp3';
fs.stat(file,(err,stat) => {
    let total = stat.size;
    let progress = 0;
    let read = fs.createReadStream(file);
    let write = fs.createWriteStream('video3.mp3');
    read.on('data',(chunk) => {
        progress+= chunk.length;
        console.log("J'ai lu "+ Math.round(100 * progress/total) + "%")
    });
     read.pipe(write);
     write.on('finish',() => {
        console.log("Le fichier a ete bien copie");
     });
 });*/

/*let fs = require('fs');

fs.readFile('video.mp3',(err,data) => {
   if (err) throw err;
   fs.writeFile('video2.mp3',data,(err )=> {
     if (err) throw err;
     console.log('La video a ete bien copie');
   });
});*/


/*let App = require('./app');
let EventOne = App.start(8080);
EventOne.on('root',function(response){
   response.write("Bienvenue dans la page d'accueil");
});*/

/*let http = require('http');
let fs = require('fs');
let url = require('url');
let server = http.createServer();
server.on('request',(request,response) => {
   let query = url.parse(request.url,true).query;
   let name = query.name === undefined ? 'anonyme' : query.name;
   fs.readFile('index.html','utf8',(err,data) => {
       if(err){
           response.writeHead(404);
           response.end('Ce fichier n\' existe pas');
       }else{
          response.writeHead(200, {
              'Content-type':'text/html;charset=utf-8'
            });
            data = data.replace('{{ name }}',name);
            response.end(data);
       }
    });
});
server.listen(8080);*/