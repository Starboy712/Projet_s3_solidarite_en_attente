<template>
<div>
    <header>
        <router-link to="/" class="logo"><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo"></router-link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li><img src="img/logo_brun_foncé.svg" alt=""></li>
            <li><router-link to="/news">NEWS</router-link></li>
            <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
            <li><router-link to="/espace-pro">ESPACE PROFESSIONNEL</router-link></li>
        </ul>
      </header>
      <section class="erreur">
        <img src="@/assets/img/error/error_403.svg"  alt="Erreur 403">
        <h2>Erreur 403</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lacus, pellentesque nec neque ac.</p>
        <img src="@/assets/img/error/error_403.svg"  alt="Erreur 403">
    </section>
</div>
</template>

<script>
export default {
  name: 'Error403',
  data () {
  }
}
</script>

<style>

</style>
