<template>
<div>
  <header>
        <router-link to="/" class="logo"><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo"></router-link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo-menu"></li>
            <li><router-link to="/news">NEWS</router-link></li>
            <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
            <li><router-link to="/espace-pro">ESPACE PROFESSIONNEL</router-link></li>
        </ul>
      </header>
    <section class="presentation">
        <h1 class="titre">Baguettes en attente</h1>
        <p>« Baguettes en attente » est une initiative qui vous permet d’acheter deux baguettes et d’en offrir une à quelqu’un. </p>
        <p>Envie de nous rejoindre ? C'est par ici !</p>
        <div class="fleche"><img src="@/assets/img/flèche.svg" alt="Descendre la page"></div>
        <img class="farineble" src="@/assets/img/farine_ble.png" alt="Illustration Farine">
        <h4>L'histoire des baguettes en attente à Belfort</h4>
        <p>Baguettes en attente est une initiative créée par Lucas Vanitou et Brigitte Vaugne en 2014 et basée sur le système des cafés suspendus de Naples.
            L’objectif, acheter deux produits et en laisser un pour un client dans le besoin. Depuis sa création, l’association a déjà proposé plus de 5000 baguettes en attente, avec plus de 4000 baguettes pour la boulangerie du Croissant de Lune à Belfort.
            </p>
        <img class="mainsolidarite" src="@/assets/img/mains_solidarite.png" alt="Illustration Solidarité">
        <h4>Comment fonctionnent les baguettes en attente ?</h4>
        <p>Il suffit d’acheter deux baguettes dans une des boulangeries partenaires pour que quelqu’un dans le besoin puisse en bénéficier gratuitement (et bien sûr vous en gardez une pour vous !). En plus, vous aidez un commerce local qui en a besoin après la crise COVID.</p>
        <h4>Qui peut en bénéficier ?</h4>
        <p>Tout le monde et peu importe le motif. Que vous ayez oublié votre porte monnaie, que votre carte décline ou que vous n’ayez pas les moyens, vous pouvez profiter d’une baguette bien chaude et croustillante !</p>
        <h4>Où est-ce que je peux participer ou récupérer une baguette ?</h4>
        <p>La liste des boulangeries partenaires se trouve <router-link to="Boulangeries">juste ici</router-link> !</p>  
        <p> Pour l'instant, cette opération concerne uniquement le territoire de Belfort et ses alentours. Peu importe la taille de la boulangerie, vous êtes les bienvenus car la solidarité n’attend que vous !
        </p>
    </section>
    <div class="section-separator">
    </div>
    <section class="schema">
      <img src="@/assets/img/schema_fonctionnement.svg" class="schemaimage" alt="Schema">
      <ul class="schema-items">
        <li class="schema-item"><img src="@/assets/img/carte_1.svg" alt="Carte 1"></li>
        <li class="schema-item"><img src="@/assets/img/carte_2.svg" alt="Carte 2"></li>
        <li class="schema-item"><img src="@/assets/img/carte_3.svg" alt="Carte 3"></li>
        <li class="schema-item"><img src="@/assets/img/carte_4.svg" alt="Carte 4"></li>
      </ul>
    </section>
    <div class="section-separator">
    </div>
    <section class="stats">
        <div class="baguettes">
            <p class="titre" id="nbbaguette">0</p>
            <p>Baguettes distribuées</p>
        </div>
        <div class="partenaires">
            <p class="titre" id="nbboulangerie">0</p>
            <p>Boulangeries partenaires</p>
        </div>
        <div class="ouitest">
            <p class="titre" id="nbaide">0</p>
            <p>Personnes aidées par jour</p>
        </div>
    </section>
    <div class="section-separator">
    </div>
    <section class="autres">
    <div class="news">
        <img src="@/assets/img/cafe_lien_news.png" alt="News">
        <router-link to="News"><p>News</p></router-link>
    </div>
    <div class="partenaires">
        <img src="@/assets/img/mains_lien_boulangeries.png" alt="Boulangeries Partenaires">
        <router-link to="Boulangeries"><p>Boulangeries partenaires</p></router-link>
    </div>
    </section>
</div>
</template>

<script>
import param from'@/param/param'

export default {
  name: 'Accueil',
  data () {
      return {
          liste:[],
      }
  },
  created(){
    // Liste des structures
    axios.get(param.host+"structure")
    .then(response=>{
      this.liste = response.data;
        var nbbaguette = 0;
        var nbboulangerie = 0;
        var nbaide = 0;
        for (let i=0; response.data[i] != null ; i++) {
        nbbaguette = (nbbaguette) + parseInt(response.data[i].acf.nb_baguette);
        nbboulangerie = i+1;
        nbaide = nbboulangerie*4;
        }
        document.getElementById("nbbaguette").innerHTML = nbbaguette;
        document.getElementById("nbboulangerie").innerHTML = nbboulangerie;
        document.getElementById("nbaide").innerHTML = nbaide;
    })
    .catch(error => console.log(error))
  }
}

</script>

<style>

</style>
