<template>
<div>

  <router-view/>


  <!-- Modal connexion -->
    <div
    class="modal fade"
    id="cnxModal"
    ref="cnxModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true" >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Connexion à l'application</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
      
            <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Login</span>
            </div>
            <input type="text" class="form-control" placeholder="Login"
              v-model="utilisateur.username"
            >
            </div>

            <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Mot de passe</span>
            </div>
            <input type="text" class="form-control" placeholder="Mot de passe"
              v-model="utilisateur.password"          
            >
            </div>
      
          </div>

          <div v-if="message != null" class="alert alert-warning text-center" role="alert">
              {{message}}
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-dark"
              @click="deconnect" data-dismiss="modal">
            Deconnexion</button>
            
            <button type="button" class="btn btn-dark"
              @click="connect"
            >    
              Connexion</button>
          </div>
        </div>
      </div>
    </div>

<!-- Modale erreur -->
    <div
    class="modal fade"
    id="errorModal"
    ref="errorModal"    
    tabindex="-1"
    role="dialog"
    aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="background-color:transparent!important;">
          <div class="modal-body">
             <div v-if="message != null"
              class="alert alert-warning text-center" role="alert">
              {{message}}
            </div>
          </div>  
        </div>  
      </div>
    </div>

      <footer>
        <div class="footer-table">
        <div class="boulanger">
            <p>Pour les boulangers et associations :</p>
            <p><a href="https://baguetteenattente.milanmorisot.fr/wp-login.php?action=register">Créer son compte</a></p> 
            <button data-toggle="modal" data-target="#cnxModal"><p>Connection/Déconnection</p></button>
            <p>{{titre}}</p>
        </div>
        <div class="liens">
            <p><router-link to="/">Accueil</router-link></p>
            <p><router-link to="/news">News</router-link></p>
            <p><router-link to="/boulangeries">Boulangeries</router-link></p>
            <p><router-link to="/espace-pro">Espace professionnel</router-link></p>
        </div>
        <div class="mentions-legales">
            <p><router-link to="/mentions-legales">Mentions Légales </router-link></p>
            <p>Contact :</p>
            <p>lucasvanitou@gmail.com</p>
            <p>bvaugne@gmail.com</p>
        </div>
    </div>
        <p>Baguettes en attente - 2021 | Tous droits résérvés</p>
    </footer>
</div>
</template>

<script>
import param from'@/param/param'
import appService from '@/services/appService'

export default {
  name: 'App',
  data(){
      return {
          utilisateur:{
              username:null,
              password:null,
// Ajout complements
              token:null,
              role:null,
              id:null,
          },
          titre:null,
          message: null,
      }
  },
  created(){
      this.titre = param.titre;

      // Recherche si utilisateur localStorage
      let utilisateurLocal = appService.getLocal();
      if(utilisateurLocal != null){
        // S'il y a un token accès pour droit sur la page
        // L'utilisateur pourrait connaitre le chemin
        this.utilisateur = utilisateurLocal;
        this.titre = this.utilisateur.nom;
      } 
  },
  watch:{
    // Observateur de routage
    $route: function(to, from){
      // Recherche user local
      let utilisateurLocal = appService.getLocal();
      if(utilisateurLocal == null){
        if((to.name == "Boulangeries") || (to.name == "News") || (to.name == "Accueil") || (to.name == "Espace_pro") || (to.name == "Mentions_legales") || (to.name == "Error401") || (to.name == "Error403") || (to.name == "Error404") || (to.name == "Error500") || (to.name == "Error502") || (to.name == "Error503") || (to.name == "Error504")) {
        } else {
        // Pas d'utilisateur local,redirection sur l'accueil
        this.titre = param.titre;
        // Redirection sur la page d'accueil
        this.$router.push('/').catch(err =>{});
        // Message noCnx
        this.message = param.message.noCnx;
        // Ouverture modale de connexion
        $("#cnxModal").modal('show');
      }
      }
      if(utilisateurLocal != null){
      // S'il y a un utilisateur local
      // Mise à jour headers d'autorisation
      let headers = {'Authorization' : 'Bearer '+ this.utilisateur.token}
      // Récupération des infos de l'utilisateur connecté
      axios({
        method: 'get',
        url: param.hostBaguette+'me',
        headers: headers
      }).then(function (response){
        let routes = response.data.data.acces;
        // route non autorisée
        // Elle n'existe pas dans le tableau des routes autorisées
        if(routes.indexOf(to.name) == -1){
          // Redirection sur la page d'accueil
          this.$router.push('/').catch(err =>{});
          // Modale message erreur
          this.message= param.message.errAcces;
          // Ouverture modale de connexion
          $("#errorModal").modal('show');
        } else {
          if(to.name == "Espace_pro"){
            this.$router.push('/Profile/'+this.utilisateur.id).catch(err =>{});
          } else {
          if(to.name == "Passerelle"){
            this.$router.push('/Edit_profil/'+this.utilisateur.id).catch(err =>{});
          }
          }
          /*if(to.name != "Profile/"+this.utilisateur.id){
          console.log("Erreur", this.utilisateur.id);
            this.$router.push('/').catch(err =>{});
            // Modale message erreur
            this.message= param.message.errTest;
            // Ouverture modale de connexion
            $("#errorModal").modal('show');
          }*/
        }
      }.bind(this))
      .catch(error => {
      })
    }
    }
  },
  methods:{
      connect:function(){
          //Connexion utilisateur avec user / mot de passe
          let params = new FormData();
          params.append('username', this.utilisateur.username);
          params.append('password', this.utilisateur.password);

          axios({
              method: 'post',
              url: param.auth,
              data : params
          }).then(function (response){
              //Récupération info utilisateur
              this.utilisateur = response.data;
              this.utilisateur.id = this.utilisateur.user_id;
              //Mise à jour du titre
              this.titre = this.utilisateur.user_display_name;
              // fermeture de la modale
              $("#cnxModal").modal('hide');
              // Sauvegarde dans le localStorage
              // Token, nom prénom
              let localValues = {
                nom : this.utilisateur.user_display_name,
                // Par principe un seul rôle
                role : this.utilisateur.user_role[0],
                token : this.utilisateur.token,
                id : this.utilisateur.user_id,
              };
              // Svg localStorage
              appService.setLocal(localValues);
              this.$router.push('/');
              //Ouverture modale connecté
              this.message= param.message.ggConnect;
              // Ouverture modale de connexion
              $("#errorModal").modal('show');
          }.bind(this))
          .catch(error => {
              //Utilisateur non connecté
              this.message = param.message.errCnx;
          })
      },
      deconnect:function(){
        // Reinitialisation des informations
        this.titre = param.titre;
        this.utilisateur = {
          id : null,
          username : null,
          user_role : null,
          token : null,
        };
        // Fermeture de la modale de connexion
        $("#cnxModal").modal('hide');
        // Supprimer le localStorage
        appService.removeLocal();
        // Redirection page accueil
        this.$router.push('/');
        //Ouverture modale deconnecté
        this.message= param.message.ggDisconnect;
        // Ouverture modale de connexion
        $("#errorModal").modal('show');
      }
  } // PAGE 332
}
</script>

<style>
.modal-open{
padding-right: 0!important;
}
</style>
