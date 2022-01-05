<template>
<div>
<header class="header-page">
      <router-link to="/" class="logo"><img src="@/assets/img/logo_blanc_brun_clair.svg" alt="Logo"></router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo-menu"></li>
          <li><router-link to="/news">NEWS</router-link></li>
          <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
          <li><router-link to="/espace-pro" class="page-actuelle">ESPACE PROFESSIONNEL</router-link></li>
      </ul>
      </header>
      <section class="profile">
        <h1>Mon profil</h1>
        <div class="top-separation"></div>
        <h1>{{titre}}</h1>
        <div class="fleche">
        <img src="@/assets/img/fleche_blanche.svg" alt="Flèche vers le bas">
      </div>
      <div class="text">
        <h2>Informations personnelles</h2>
        <p>{{titre}}</p>
        <h2>Ma boulangerie</h2>
        <img :src="structure.acf.photo_structure" :alt="structure.acf.nom_structure">
        <p>Nom de la boulangerie : {{structure.acf.nom_structure}}</p>
        <p>Adresse : {{structure.acf.num_rue}} {{structure.acf.nom_rue}}, {{structure.acf.code_postal}} {{structure.acf.ville_structure}}</p>
        <p>Nombre de baguettes distribuées : {{structure.acf.nb_baguette}}</p>
        <p>Description de la boulangerie : {{structure.acf.desc_structure}}</p>
        <router-link to="/passerelle">
          <div class="bouton">
        <p>Modifier mon profil</p> 
        </div></router-link>
      </div>
      </section>
</div>
</template>

<script>
import param from'@/param/param'
import appService from '@/services/appService'
export default {
  name: 'Profile',
data(){
      return {
          utilisateur:{
              username:null,
              password:null,
// Ajout complements
              token:null,
              role:null,
              user_id:null,
          },
          structure : {
            acf: {
              nom_structure: null,
              type_structure: null,
              desc_structure: null,
              num_rue: null,
              nom_rue: null,
              code_postal: null,
              ville_structure: null,
              nb_baguette: null,
              photo_structure: null,
              id_compte: null,
            }
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
      axios.get(param.host+"structure?per_page=100")
      .then(response=>{
        this.structures = response.data;
        for (let i = 0; response.data[i] !=null ; i++) {
          if (this.utilisateur.id == this.structures[i].acf.id_compte) {
            this.existe = 1;
            this.structure = this.structures[i];
            this.imageData = this.structure.acf.photo_structure;
          }
        }
        if(this.existe != 1) {
          //EXISTE PAS
          this.existe = 0;
          }
      })
      .catch(error => console.log(error))
  },
}
</script>

<style>
.text p:first-of-type {
  margin-top: 20px;
}
 .text img {
   width: 100px;
   margin-bottom: 20px;
   margin-top: 10px;
 }
</style>
