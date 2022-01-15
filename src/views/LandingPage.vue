<template>
  <div>
    <app-header>
      <ui-search placeholder="Search for photo" />
    </app-header>
    <div class="-mt-10">
      <div class="container">
        <template v-if="loading.photos">
          <div class="md:masonry-2-col lg:masonry-3-col mx-0 md:mx-10">
            <div
              class="w-full inline-block mb-6 align-top"
              v-for="(i, index) in 8"
              :key="index"
            >
              <ui-placeholder-block />
            </div>
          </div>
        </template>
        <template v-else-if="!loading.photos && loading.error">
          <ui-error-state @tryAgain="fetchPhotos">
            Error fetching photos
          </ui-error-state>
        </template>
        <template v-else>
          <ui-empty-state v-if="photos.length === 0">
            No photos available
          </ui-empty-state>
          <photo-card v-else :photos="photos" @onPhotoClicked="photoClicked" />
        </template>
      </div>
    </div>
    <ui-modal :show="showModal" @close="hideModal">
      <photo-detail :photo="currentPhoto" />
    </ui-modal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UiSearch from '@/components/ui/UiSearch'
import PhotoCard from '@/components/PhotoCard'
import PhotoDetail from '@/components/PhotoDetail'
import useSearchPhotos from '@/hooks/photos'

const { loading, photos, fetchPhotos } = useSearchPhotos()
const showModal = ref(false)
const currentPhoto = ref({})

onMounted(() => {
  fetchPhotos()
})

function hideModal() {
  showModal.value = false
}
function photoClicked(photo) {
  currentPhoto.value = photo
  showModal.value = true
}
</script>
