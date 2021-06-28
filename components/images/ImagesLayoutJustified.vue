<template>
  <VueJustifiedLayout
    v-slot="{ item }"
    :items="images"
    :options="{
      boxSpacing: {
        horizontal: 16,
        vertical: 16,
      },
      targetRowHeight: 240,
    }"
  >
    <nuxt-link :to="item.slug" class="group">
      <ImagesThumb :image="item" />
    </nuxt-link>
  </VueJustifiedLayout>
</template>

<script>
import { VueJustifiedLayout } from 'vue-justified-layout'

export default {
  components: { VueJustifiedLayout },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.justified-container {
  margin: -8px;
}
.justified-item {
  z-index: 0;
}
.justified-container .justified-item img,
.justified-container .justified-item video {
  max-width: 100%;
  // height: 100%;
}
</style>
