<template>
  <div class="image-container relative w-full inline-flex overflow-hidden">
    <figure
      class="relative bg-transparent h-100 mx-auto p-4"
      :title="image.title"
    >
      <img
        :src="image.img"
        :alt="image.title"
        class="w-auto h-full object-contain"
        loading="lazy"
      />
      <figcaption class="sr-only relative text-white p-4 opacity-100">
        <p class="text text-xs mb-2">
          {{ image.date }}
        </p>
        <p class="line-clamp-2">
          {{ image.title }}
        </p>
      </figcaption>
    </figure>
    <img
      :src="image.img"
      alt=""
      class="absolute w-full h-full object-cover bg-blur top-0"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  height: 562px;
  // @media screen and (min-width: 1280px) {
  //   height: calc((1280px - (24rem + 40px)) * 61 / 100);
  // }
}

.bg-blur {
  transform: scale(1.1);
  filter: blur(70px) brightness(1.3) contrast(0.8);
  z-index: -1;
}
</style>
