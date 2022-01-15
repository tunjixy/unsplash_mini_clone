import PhotoService from '@/services/PhotoService'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    searchPhotos(context, payload) {
      return new Promise((resolve, reject) => {
        PhotoService.searchPhotos(payload)
          .then(({ data }) => {
            resolve(data)
          })
          .catch((err) => reject(err))
      })
    },
  },
  getters: {},
}
