export default{
    // Serveur fournisseur de données - back-end
    host : 'https://baguetteenattente.milanmorisot.fr/wp-json/wp/v2/',
    hostBaguette : 'https://baguetteenattente.milanmorisot.fr/wp-json/baguette/v1/',

    // Authentification JWT Wordpress
    auth: 'https://baguetteenattente.milanmorisot.fr/wp-json/jwt-auth/v1/token',

    imageParticipant : "https://jsonvideo.jmfino.fr/imagespersonnes/inconnu.png",
    
    //Titre Application
    titre : "",

    // Messages de l'application
    message : {
        errCnx : "Les élements d'identification ne permettent pas d'accéder à l'application",
        errAcces: "Vous n'avez pas les droits nécessaires pour accéder à cette page",
        ggConnect: "Vous êtes connectés",
        ggDisconnect: "Vous êtes bien déconnectés",
    }
}