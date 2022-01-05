<template>
<div>
  <header>
        <router-link to="/" class="logo"><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo"></router-link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo-image"></li>
            <li><router-link to="/news">NEWS</router-link></li>
            <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
            <li><router-link to="/espace-pro">ESPACE PROFESSIONNEL</router-link></li>
        </ul>
      </header>
      <section class="register">
      <h1>Modifier mon profil</h1>
      <form @submit.prevent="formulaire" enctype="multipart/form-data">
        <h2>Informations personnelles</h2>
        <p>Afin de changer les informations relatives à votre compte, rendez-vous <a  href="https://baguetteenattente.milanmorisot.fr/wp-admin/profile.php">ICI</a></p>
        <h2>Ma boulangerie / Mon association</h2>
        <select id="boulangerie" name="boulangerie" v-model="structure.acf.type_structure"> 
          <option value="type">Type de structure</option>
          <option value="boulangerie">Boulangerie</option>
          <option value="association">Association</option>
        </select>
        <br>
        <input v-model="structure.acf.nom_structure" type="text" id="nom_structure" name="nom_structure" placeholder="Nom de l'établissement *" required>
        <br>
        <input v-model="structure.acf.num_rue" type="number" id="numero_rue" name="numero_rue" placeholder="Numéro de rue *" required>
        <input v-model="structure.acf.nom_rue" type="text" id="nom_rue" name="nom_rue" placeholder="Nom de la rue *">
        <br>
        <input v-model="structure.acf.code_postal" type="number" id="code_postal" name="code_postal" placeholder="Code postal *" required>
        <input v-model="structure.acf.ville_structure" type="text" id="ville_structure" name="ville_structure" placeholder="Ville *" required>
        <br>
        <textarea v-model="structure.acf.desc_structure" name="desc_structure" id="desc_structure" cols="30" rows="10" placeholder="Description de l'établissement *" required></textarea>
        <br> 
        <label for="nb_baguette">Nombre de baguettes en attente vendues :</label>
        <input v-model="structure.acf.nb_baguette" type="number" id="nb_baguette" name="nb_baguette" placeholder="Nombre baguette" required>
        <br>
        <label for="image_structure">Ajouter une image</label>
        <input type="file" ref="file" @change="previewImage" id="file" name="image_structure" placeholder="Ajouter une image *" class="fichiers">
        <img :src="imageData">
        <br>
        <button type="submit">Valider les modifications</button>
      </form>
    </section>
</div>
</template>

<script>
// SI EXISTE PAS ALORS = CREATION SINON MODIFICATION (FAUT FAIRE LA DIFF ENTRE CREATION ET MODIFICATION, (Si null alors creation))
import param from'@/param/param'
import appService from '@/services/appService'

export default {
  name: 'Edit_profil',
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
          existe: 0,
          titre:null,
          message: null,
          href: null,
          imageData: param.imageParticipant,
          file: null,
          updatePhoto:false,
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
          }
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
  methods :{
        previewImage: function(event) {
      this.file = this.$refs.file.files[0];
      this.updatePhoto=true;
      var input = event.target;
      if (input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },

        formulaire: function(){
      if(this.existe == 0) {
        // Fonction creer
        let token = this.utilisateur.token;
        
        const formData = new FormData();
        let imagefile = document.querySelector("#file");
        formData.append('file', this.file);
        formData.append("title", this.structure.acf.nom_structure);
        formData.append("status", 'publish');

        let headers = {
          'Authorization' : 'Bearer '+ token,
          'Content-Type' : 'multipart/form-data'
        }
        axios({
          method: 'post',
          url : param.host+'media',
          data: formData,
          headers: headers
        }).then(function(response){
          // Récupération id de l'image
          let idImage = response.data.id;
          let UrlImage = response.data.source_url;
          // Création de la structure
          axios({
            method: 'post',
            data: {
              title: this.structure.acf.nom_structure,
              status : 'publish',
              fields : {
                nom_structure : this.structure.acf.nom_structure,
                type_structure : this.structure.acf.type_structure,
                num_rue : this.structure.acf.num_rue,
                nom_rue : this.structure.acf.nom_rue,
                code_postal : this.structure.acf.code_postal,
                ville_structure : this.structure.acf.ville_structure,
                desc_structure : this.structure.acf.desc_structure,
                nb_baguette : this.structure.acf.nb_baguette,
                photo_structure : idImage,
                id_compte : this.utilisateur.id,
              }
            },
            url: param.host+'structure',
            headers: { 'Authorization' : 'Bearer '+ token}
          }).then(function(response){
            this.$router.push('/Profile/'+this.utilisateur.id);
          }.bind(this))
          .catch(error => {
          })
        }.bind(this))
        .catch(error => {
        })
      } else if(this.existe == 1) {
        // Fonction modif
        let token = this.utilisateur.token;

        this.update();
      }
    },

    update:function(){
      if(this.updatePhoto){
        let token = this.utilisateur.token;
        const formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append('file', this.file);
        formData.append("title", this.structure.acf.nom_structure);
        formData.append("status", 'publish');

        let headers = {
          'Authorization' : 'Bearer '+ token,
          'Content-Type' : 'multipart/form-data'
        }
        axios({
          method: 'post',
          url: param.host+'media',
          data:formData,
          headers: headers
        }).then(function (response){
          this.structure.acf.photo_structure = response.data.id;
          this.updateStructure();
        }.bind(this))
        .catch(error => {
        })
      }else{ // Pas de nouvelle image
        this.updateStructure();
      }
    },

    updateStructure:function(){
      let token = this.utilisateur.token;
      let data = {
          title: this.structure.acf.nom_structure,
          status : 'publish',
          fields : {
              nom_structure : this.structure.acf.nom_structure,
              type_structure : this.structure.acf.type_structure,
              num_rue : this.structure.acf.num_rue,
              nom_rue : this.structure.acf.nom_rue,
              code_postal : this.structure.acf.code_postal,
              ville_structure : this.structure.acf.ville_structure,
              desc_structure : this.structure.acf.desc_structure,
              nb_baguette : this.structure.acf.nb_baguette,
              photo_structure : this.structure.acf.photo_structure,
              id_compte : this.utilisateur.id,
      }
    };
    axios({
      method: 'post',
      data: data,
      url: param.host+'structure/'+this.structure.id,
      headers: { 'Authorization' : 'Bearer '+ token}
    }).then(function (response){
      this.$router.push('/Profile/'+this.utilisateur.id);
    }.bind(this))
    .catch(error => {
    })
    },



  }
}
</script>

<style scoped>
select {
  margin-bottom: 30px;
}
 form img {
   width: 300px;
   margin-bottom: 30px;
 }
 #nb_baguette {
   margin-bottom: 30px;
 }
</style>
