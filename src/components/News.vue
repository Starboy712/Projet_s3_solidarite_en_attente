<template>
<div>
  <header class="header-page">
      <router-link to="/" class="logo"><img src="@/assets/img/logo_blanc_brun_clair.svg" alt="Logo"></router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo-menu"></li>
          <li><router-link to="/news" class="page-actuelle">NEWS</router-link></li>
          <li><router-link to="/boulangeries">BOULANGERIES</router-link></li>
          <li><router-link to="/espace-pro">ESPACE PROFESSIONNEL</router-link></li>
      </ul>
      </header>
      <section class="newss">
      <h1>News</h1>
      <div class="cardlist">
      <div class="card" v-for="posts in liste" :key="posts.id"> 
        <img :src="posts.better_featured_image.source_url" :alt="posts.title.rendered">
        <h3>{{posts.title.rendered}}</h3>
        <h4>{{posts.date | liveDate(10)}}</h4>
        <p>{{posts.content.rendered | liveSubstr(200)}}</p>
        <a :href="posts.link">Lire la suite</a>
      </div>
    </div>
      </section>
</div>
</template>

<script>

import param from'@/param/param'

export default {
  name: 'News',
  data () {
    return {
      liste:[],
    }
  },
  filters: {
    liveSubstr: function(string, nb) {
      return string.substring(4,nb) + '...';
    },
    liveDate: function(string, nb) {
      return string.substring(0,nb);
    }
  },
  created(){
    // Liste des articles
    axios.get(param.host+"posts")
    .then(response=>{
      this.liste = response.data;
    })
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>