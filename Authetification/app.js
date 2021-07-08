const  express  =  require ( 'express' ) ;
const  path  =  require ( 'path' ) ;
const  bodyParser  =  require ( 'body-parser' ) ;
const  session  =  require ( 'express-session' ) ;
const  cors  =  require ( 'cors' ) ;
const  mangouste  =  require ( 'mangouste' ) ;
const  errorHandler  =  require ( 'errorhandler' ) ;

// Configurer la promesse de mangouste en promesse mondiale
mangouste . promesse  =  mondiale . Promesse ;

// Configurer la variable isProduction
const  isProduction  =  processus . env . NODE_ENV  ===  'production' ;

// Lancer notre application
const  app  =  express ( ) ;

// Configurer notre application
app . utilisation ( cors ( ) ) ;
app . use ( require ( 'morgan' ) ( 'dev' ) ) ;
app . use ( bodyParser . urlencoded ( {  extended : false  } ) ) ;
app . use ( bodyParser . json ( ) ) ;
app . use ( express . static ( path . join ( __dirname ,  'public' ) ) ) ;
app . use ( session ( {  secret : 'passport-tutorial' ,  cookie : {  maxAge : 60000  } ,  resave : false ,  saveUninitialized : false  } ) ) ;

if ( ! isProduction )  {
  app . use ( errorHandler ( ) ) ;
}

// Configurer Mongoose
mangouste . connect ( 'mongodb: // localhost / passport-tutorial' ) ;
mangouste . set ( 'debug' ,  true ) ;
//Models 
require('./models/Users');
require('./config/passport');

// Gestionnaires d'erreurs et middlewares
if ( ! isProduction )  {
  app . utiliser ( ( err ,  req ,  res )  =>  {
    res . statut ( err . statut  ||  500 ) ;

    res . json ( {
      erreurs : {
        message : err . message ,
        erreur : err ,
      } ,
    } ) ;
  } ) ;
}

app . utiliser ( ( err ,  req ,  res )  =>  {
  res . statut ( err . statut  ||  500 ) ;

  res . json ( {
    erreurs : {
      message : err . message ,
      erreur : { } ,
    } ,
  } ) ;
} ) ;

app . listen ( 8000 ,  ( )  =>  console . log ( 'Serveur fonctionnant sur http: // localhost: 8000 /' ) ) ;