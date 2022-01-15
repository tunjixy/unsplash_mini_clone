import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useSearchPhotos(query) {
  const store = useStore()

  const photos = ref([])
  const loading = ref({
    photos: false,
    error: false,
  })

  async function fetchPhotos() {
    try {
      loading.value.photos = true
      loading.value.error = false
      const response = await store.dispatch('photo/searchPhotos', {
        page: 1,
        perPage: 8,
        orderBy: 'latest',
        query: query ?? 'African',
      })
      loading.value.photos = false
      if (response) {
        photos.value = response.results
      }
    } catch (err) {
      loading.value.photos = false
      loading.value.error = true
    }
  }

  return {
    loading,
    photos,
    fetchPhotos,
  }
}
