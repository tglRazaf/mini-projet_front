import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eleve:  {
      nom: '',
      prenom: '',
      date_de_naissance: '',
      filiere: '',
      niveau: 0,
      past_ecole: '',
      tel_eleve: '',
      tel_eleve2: '',
      address_eleve: '',
      e_mail: '',
      nom_pere: '',
      tel_pere: '',
      nom_mere: '',
      tel_mere: '',
      address_parent: ''
    }
  },
  mutations: {
    mutationOne(state, el){
      state.eleve.nom= el.nom;
      state.eleve.prenom= el.prenom;
      state.eleve.date_de_naissance= el.date_de_naissance;
      state.eleve.filiere= el.filiere
      state.eleve.niveau= el.niveau;
      state.eleve.past_ecole= el.past_ecole;
    },
    mutationTwo(state, el){
      state.eleve.tel_eleve= el.tel_eleve;
      state.eleve.tel_eleve2= el.tel_eleve2;
      state.eleve.address_eleve= el.address_eleve;
      state.eleve.e_mail= el.e_mail; 
    },
    mutationFree(state, el){
      state.eleve.nom_pere= el.nom_pere;
      state.eleve.tel_pere= el.tel_pere;
      state.eleve.nom_mere= el.nom_mere;
      state.eleve.tel_mere= el.tel_mere; 
      state.eleve.address_parent= el.address_parent;
    }
  },
  actions: {
  },
  modules: {
  }
})
