<template>
<div>
<header class="header-page">
      <router-link to="/" class="logo"><img src="@/assets/img/logo_blanc_brun_clair.svg" alt="Logo"></router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><img src="@/assets/img/logo_brun_foncé.svg" alt=""></li>
          <li><router-link to="/news">NEWS</router-link></li>
          <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
          <li><router-link to="/espace-pro" class="page-actuelle">ESPACE PROFESSIONNEL</router-link></li>
      </ul>
      </header>
      <section class="espace-pro">
        <h1>Espace professionnel</h1>
        <div class="fleche">
        <img src="@/assets/img/fleche_blanche.svg" alt="Flèche vers le bas">
      </div>
      <div class="text">
        <h2>Envie de nous rejoindre ?</h2>
        <p>Le mouvement baguettes en attente à besoin de vous !</p>
        <p>Si vous êtes un boulanger ou un association de Belfort, remplissez ce formulaire d’inscription. Un administrateur validera votre candidature et nous vous fournirons des identifiants à utiliser pour gérer votre page !</p>
        <a href="https://baguetteenattente.milanmorisot.fr/wp-login.php?action=register"><div class="bouton">
        <p>Créer un compte</p> 
        </div></a>
        <button data-toggle="modal" data-target="#cnxModal"><p> Déjà inscrit ? <i>Se connecter</i></p></button> 
      </div>
      </section>
</div>
</template>

<script>
export default {
  name: 'Espace_pro',
  data () {
  }
}
</script>

<style scoped>
  .text button {
    background: none;
    border: none;
    padding: 0;
  }

  .text button i {
    color: #7B4F2F;
    text-decoration: underline;
    font-style: normal;
  }
</style>
