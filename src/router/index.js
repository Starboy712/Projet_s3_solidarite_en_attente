import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import News from '@/components/News'
import Boulangeries from '@/components/Boulangeries'
import Espace_pro from '@/components/Espace_pro'
import Mentions_legales from '@/components/Mentions_legales'
import Profile from '@/components/Profile'
import Edit_profil from '@/components/Edit_profil'
import Article_type from '@/components/Article_type'

import Error401 from '@/components/error/Error401'
import Error403 from '@/components/error/Error403'
import Error404 from '@/components/error/Error404'
import Error500 from '@/components/error/Error500'
import Error502 from '@/components/error/Error502'
import Error503 from '@/components/error/Error503'
import Error504 from '@/components/error/Error504'
import Passerelle from '@/components/Passerelle'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/news', name: 'News', component: News },
    { path: '/boulangeries', name: 'Boulangeries', component: Boulangeries},
    { path: '/espace-pro', name: 'Espace_pro', component: Espace_pro},
    { path: '/mentions-legales', name: 'Mentions_legales', component: Mentions_legales},
    { path: '/profile/:id', name: 'Profile', component: Profile},
    { path: '/edit_profil/:id', name: 'Edit_profil', component: Edit_profil},
    { path: '/article-type', name: 'Article_type', component: Article_type},
    { path: '/passerelle', name: 'Passerelle', component: Passerelle},

    { path: '/error-401', name: 'Error401', component: Error401},
    { path: '/error-403', name: 'Error403', component: Error403},
    { path: '/error-404', name: 'Error404', component: Error404},
    { path: '/error-500', name: 'Error500', component: Error500},
    { path: '/error-502', name: 'Error502', component: Error502},
    { path: '/error-503', name: 'Error503', component: Error503},
    { path: '/error-504', name: 'Error504', component: Error504},
  ]
})
