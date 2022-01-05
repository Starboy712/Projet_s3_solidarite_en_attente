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
      <section class="mentions-legales">
        <h1>Mentions Légales</h1>
        <p>Le site baguettes en attente propose aux boulangers de Belfort et de ses alentours de rejoindre le mouvement et de mettre en avant sa boulangerie sur ce site.
        </p>
        <h4>Informations éditoriales </h4>
        <p>Éditeur</p>
        <p>Contact</p>
        <p>Pour tout besoin de contact, veuillez vous adresser à :</p>
        <p>Mme Vaugne Brigitte</p>
        <p>Mail :</p>
        <p>Numéro de téléphone :</p>
        <p>ou à</p>
        <p>Mr Vanitou Lucas</p>
        <p>Mail : </p>
        <p>Numéro de téléphone :</p>
        <h4>Protection et traitement de donnés à caractère personnel</h4>
        <p><b>Respect des lois en vigueur</b></p>
        <p>Baguette en attente respecte la vie privée de l’internaute et se conforme strictement aux lois en vigueur sur la protection de la vie privée et des libertés individuelles. Aucune information personnelle n’est collectée à votre insu. Aucune information personnelle n’est cédée à des tiers. Les courriels, les adresses électroniques ou autres informations nominatives dont ce site est destinataire ne font l’objet d’aucune exploitation et ne sont conservés que pour la durée nécessaire à leur traitement.
        </p>
        <p><b>Droit des internautes : droit d’accès et de rectification</b></p>
        <p>Baguette en attente s’engage à ce que la collecte et le traitement de vos données, effectués à partir du site soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
        </p>
        <p>Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles, vous pouvez contacter :
        </p>
        <p>Pour tout besoin de contact, veuillez vous adresser à :
        </p>
        <p>Mme Vaugne Brigitte</p>
        <p>Mail :</p>
        <p>Numéro de téléphone :</p>
        <p>ou à</p>
        <p>Mr Vanitou Lucas</p>
        <p>Mail : </p>
        <p>Numéro de téléphone :</p>
        <p><b>Prestataire d'hébergement</b></p>
        <p>Infomaniak :</p>
        <p>Siège Social :</p>
        <p>Rue Eugène-Marziano 25</p>
        <p>1227 Les Acacias</p>
        <p> <a href="http://www.infomaniak.ch/">http://www.infomaniak.ch/</a></p>

      </section>
</div>
</template>

<script>
export default {
  name: 'Mentions_legales',
  data () {
  }
}
</script>

<style>

</style>
