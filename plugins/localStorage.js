import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: '3aFood',
      paths: ['user','cart']
  })(store)
}