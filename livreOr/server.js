let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let session =  require('express-session');
//Moteur de template
app.set('view engine','ejs');
//Middleware
app.use(session({
    secret:'avfhb',
    resave:false,
    saveUninitialized:true,
    cookie:{ secure:false }
}))
app.use('/assets',express.static('public'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(require('./middlewares/flash'))
//Routes
app.get('/',(request,response) => {
   /* if(request.session.error){
        response.locals.error = request.session.error;
        request.session.error = undefined;
    }*/
    let Message = require('./models/message');
    Message.all(function(messages){
        response.render('pages/index',{messages:messages});
    });
    
});
app.post('/',(request,response) => {
    if(request.body.message === undefined || request.body.message === ''){
       //request.session.error = 'Il y a une erreur';
       request.flash('error','Le champs message est vide.');
       response.redirect('/');
    }else{
        let Message = require('./models/message');
        Message.create(request.body.message,function(){
            request.flash('success','Merci!');
            response.redirect('/');
        });
    }
});
app.get('/message/:id',(request,response) => {
     let Message = require('./models/message');
     Message.find(request.params.id,function(message) {
         response.render('messages/show',{message:message});
     })
});
app.listen(8080);