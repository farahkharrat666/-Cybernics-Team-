const  mangouste  =  require ( 'mangouste' ) 
 const passeport =  exigé ( passeport) ;
const  LocalStrategy  =  require ( 'passport-local' ) ;

const  Users  =  mangouste . modèle ( utilisateurs ) ;

passeport . use ( new  LocalStrategy ( {
  usernameField : 'user [email]' ,
  passwordField : 'utilisateur [mot de passe]' ,
} ,  ( email ,  motdepasse ,  terminé )  =>  {
  Utilisateurs . findOne ( { email } )
    . alors ( ( utilisateur )  =>  {
      if ( ! user  || ! user . validatePassword ( motdepasse ) )  {
        retour  effectué ( null ,  false ,  {  erreurs : {  'email ou mot de passe' : 'nest pas valide'  }  } ) ;
      }

      retour  effectué ( null ,  utilisateur ) ;
    } ) . capture ( fait ) ;
} ) ) ;