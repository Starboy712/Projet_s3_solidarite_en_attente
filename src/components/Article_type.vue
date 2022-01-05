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
      <section class="article">
      <h1>Lorem Ipsum dolor sit amet</h1>
      <h4>01 janv. 2022</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lacus, pellentesque nec neque ac, semper sodales augue. Sed ac mauris cursus enim placerat lobortis et id massa. Nam et justo ut magna interdum consequat. Mauris tempor augue eget risus rhoncus dapibus. Nullam mattis efficitur tincidunt.</p>
      <img src="@/assets/img/illustration/boulangerie_le_croissant_de_lune.jpg" alt="Boulangerie">
      <div>
      <h3>Des baguettes en folie</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lacus, pellentesque nec neque ac, semper sodales augue. Sed ac mauris cursus enim placerat lobortis et id massa. Nam et justo ut magna interdum consequat. Mauris tempor augue eget risus rhoncus dapibus. Nullam mattis efficitur tincidunt.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at orci et ex mattis faucibus non at dui. Fusce eu felis id massa dignissim feugiat. Sed tempus at neque eget placerat. Suspendisse quis auctor dolor.</p>
    </div>
    <div>
      <h3>D'autres types de produits en attente ?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lacus, pellentesque nec neque ac, semper sodales augue. Sed ac mauris cursus enim placerat lobortis et id massa. Nam et justo ut magna interdum consequat. Mauris tempor augue eget risus rhoncus dapibus. Nullam mattis efficitur tincidunt.</p>
      <p>In tempor in dolor vitae fringilla. Sed nec fringilla nunc, sit amet congue sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam congue ullamcorper dolor, et malesuada libero mattis nec. Nam lacus mi, fringilla a dapibus et, posuere malesuada dui. Nulla in urna eget dolor cursus viverra quis id nisi. Curabitur interdum purus a augue tincidunt dapibus. Praesent eget tempus lectus.</p>
      <p>Maecenas non tempus eros. Ut non commodo lorem. Maecenas non aliquet magna, vitae egestas lectus. Nam lacinia sollicitudin quam.</p>
    </div>
      <img src="@/assets/img/illustration/croissants.png" alt="Croissants">
      <div>
      <h3>Un partenariat de longue durée</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lacus, pellentesque nec neque ac, semper sodales augue. Sed ac mauris cursus enim placerat lobortis et id massa. Nam et justo ut magna interdum consequat. Mauris tempor augue eget risus rhoncus dapibus. Nullam mattis efficitur tincidunt. Etiam quis nisi diam. Sed pulvinar sapien ultricies ipsum imperdiet malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <p>Aliquam rhoncus ultrices sapien, sit amet lacinia nunc aliquet non. Integer feugiat pretium iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur aliquet semper nisi, sit amet laoreet elit vestibulum in. In hac habitasse platea dictumst. Curabitur congue porta eros et hendrerit. </p>
    </div>
      <div class="section-separator"></div>
      <div class="others-article">
      <div class="autres-articles">
        <img src="@/assets/img/illustration/image_article_2.jpg" alt="Article 1">
        <p>Nouvelle boulangerie</p>
        <h4>01 janv. 2022</h4>
      </div>
      <div class="autres-articles">
        <img src="@/assets/img/illustration/image_article_3.jpg" alt="Article 2">
        <p>Nos futurs partenaires</p>
        <h4>28 déc. 2022</h4>
      </div>
      <div class="autres-articles">
        <img src="@/assets/img/illustration/croissants.png" alt="Article 3">
        <p>Les plus belles baguettes</p>
        <h4>12 déc. 2022</h4>
      </div>
    </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Article_type',
  data () {
  }
}
</script>

<style>

</style>
