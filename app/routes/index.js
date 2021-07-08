const  express  =  require ( 'express' ) ;
const  router  =  express . Routeur ( ) ;

routeur . use ( '/ api' ,  require ( './api' ) ) ;

module . exportations  =  routeur ;