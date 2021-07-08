const  jwt  =  require ( 'express-jwt' ) ;

const  getTokenFromHeaders  =  ( req )  =>  {
  const  {  headers : { autorisation }  }  =  req ;

  if ( autorisation  &&  autorisation . split ( '' ) [ 0 ]  ===  'Token' )  {
     autorisationderetour. split ( '' ) [ 1 ] ;
  }
  return null ;
} ;

const  auth  =  {
  requis : jwt ( {
    secret : secret,
    userProperty : 'payload' ,
    getToken : getTokenFromHeaders ,
  } ) ,
  facultatif : jwt ( {
    secret : secret ,
    userProperty : 'payload' ,
    getToken : getTokenFromHeaders ,
    credentialsRequired : false ,
  } ) ,
} ;

module . exportations  =  auth ;