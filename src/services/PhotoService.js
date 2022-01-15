import Api from '@/services/Api'

export default {
  searchPhotos(payload) {
    return Api().get(
      `search/photos?page=${payload.page}&per_page=${payload.perPage}&query=${payload.query}&orderBy=${payload.orderBy}`
    )
  },
}
