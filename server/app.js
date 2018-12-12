const http = require('http');
const path = require('path');
const express = require('express');
const moongoose = require('mongoose');

const app = express();
const routesControllers = require('./routes/routes-controllers');
const routes = require('./routes/routes');

moongoose.connect('mongodb://DeAngelis84:deangelis84@ds163013.mlab.com:63013/tweet-api', { useNewUrlParser: true });
http.createServer(app);

    // Seleciona a porta do Servidor
app.set('port', process.env.PORT || 3000);
   
    // middleawres
//app.use(cors({origin:'http://localhost:4200/'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

    //Routes
app.use('/', routes);
app.use('/tweets', routesControllers);


app.listen(app.get('port'),() =>{
    console.log('Servidor na Porta',+ app.get('port'));
});