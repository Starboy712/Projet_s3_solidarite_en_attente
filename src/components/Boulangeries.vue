<template>
<div>
  <header class="header-page">
      <router-link to="/" class="logo"><img src="@/assets/img/logo_blanc_brun_clair.svg" alt="Logo"></router-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><img src="@/assets/img/logo_brun_foncé.svg" alt="Logo-menu"></li>
          <li><router-link to="/news">NEWS</router-link></li>
          <li><router-link to="/boulangeries" class="page-actuelle">BOULANGERIES</router-link></li>
          <li><router-link to="/espace-pro">ESPACE PROFESSIONNEL</router-link></li>
      </ul>
      </header>
      <section class="boulangeries">
        <h1>Boulangeries partenaires</h1>
        <div class="fleche">
        <img src="@/assets/img/fleche_blanche.svg" alt="Flèche vers le bas">
      </div>
      <div class="text">
        <h2>Envie d'une baguette ?</h2>
        <p>Voici la liste des boulangeries partenaires et leurs localisations !</p>
      <gmap-map class="carte" :center='center' :zoom='18' :options="{zoomControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false, rotateControl: false, fullscreenControl: false, disableDefaultUi: false, styles: [{'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}]}" ref="gmap" >
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="toggleInfoWindow(m,index)"> </gmap-marker>
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <div v-html="infoContent"></div>
      </gmap-info-window>
      </gmap-map>
      </div>
      </section>
</div>
</template>

<script>
import param from'@/param/param'
  export default {
    name: "test",
    data() {
      return {
        //a default center for the map
        center: {lat: 47.6397, lng: 6.8638},
        map: null,
        infoContent: '',
        infoWinOpen: false,
        currentMidx: null,
        liste: [],
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        markers: [
          {
            image: "https://baguetteenattente.milanmorisot.fr/wp-content/uploads/image_article_2-scaled.jpg",
            name: "Test",
            address: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis, risus et ullamcorper elementum, mi libero luctus nulla, non egestas nibh elit in quam. Nulla facilisi. Phasellus pellentesque nibh et nisi mattis tincidunt. Curabitur eu eros non nisl semper ullamcorper",
            position: {lat: 47.63885, lng: 6.86275}
          },
          {
            image: "https://baguetteenattente.milanmorisot.fr/wp-content/uploads/2021/12/boulangerie_le_croissant_de_lune.jpg",
            name: "Le Croissant de Lune",
            address: "68 Faubourg de Montbéliard 90000 Belfort",
            description: "Boulangerie sur la ville de Belfort",
            position: {lat: 47.63929, lng: 6.86375}
          },
          {
            image: "https://baguetteenattente.milanmorisot.fr/wp-content/uploads/image_article_2-scaled.jpg",
            name: "Le Croissant du Soleil",
            address: "3 avenue de la lune 1969 Lune",
            description: "Boulangerie sur la lune",
            position: {lat: 47.63985, lng: 6.8620}
          },
        ],
      };
    },
      created(){
    // Liste des structures
    axios.get(param.host+"structure")
    .then(response=>{
      this.liste = response.data;
    })
    .catch(error => console.log(error))
  },
    mounted() {
      //set bounds of the map
      this.$refs.gmap.$mapPromise.then((map) => {
        const bounds = new google.maps.LatLngBounds()
        for (let m of this.markers) {
          bounds.extend(m.position)
        }
        map.fitBounds(bounds);
      });
    },
    methods: {
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);
        

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },

      getInfoWindowContent: function (marker) {
        return (`<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${marker.image}" style="width:96px;" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>
    <div class="content">
    ${marker.address}
    </div>
    <div class="content">
      ${marker.description}
    </div>
  </div>
</div>`);
      },
    }
  };
</script>