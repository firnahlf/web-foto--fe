<template>
  <figure class="relative bg-white" :title="image.title">
    <img
      :src="image.img"
      :alt="image.title"
      class="w-full h-auto object-cover"
    />
    <div class="figure-overlay absolute bottom-0">
      <div
        class="relative flex mt-4 px-4 figure__tag-info"
        :class="$device.isDesktop ? 'opacity-0' : 'opacity-100'"
      >
        <a
          v-for="(category, catIndex) in image.categories"
          :key="catIndex"
          class="text-sm text-white py-1 px-3 rounded-sm bg-black-light bg-opacity-70 hover:bg-opacity-90 capitalize"
          tabindex="-1"
        >
          {{ category }}
        </a>
      </div>
      <figcaption class="relative text-white p-4 opacity-100">
        <p class="text text-xs mb-2">
          {{ image.date }}
        </p>
        <p class="line-clamp-2">
          {{ image.title }}
        </p>
      </figcaption>
    </div>
  </figure>
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
figure {
  // min-height: 240px;
}
.grid-popular figure {
  height: calc(100vw - 2rem);

  & img {
    height: 100%;
    width: auto;
  }

  @media screen and (min-width: 768px) {
    height: calc((100vw - 4rem - 2.5rem) / 3);
  }
}
.figure-overlay:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 0%,
    rgba(37, 38, 39, 0.25) 20.83%,
    rgba(37, 38, 39, 0.8) 48.96%,
    #252627 100%
  );
  opacity: 0.7;
  transition: all 0.3s;
}
figure:hover .figure-overlay:before,
a:focus .figure-overlay:before {
  opacity: 1;
}
.figure__tag-info {
  @apply group-focus:opacity-100 group-hover:opacity-100 transition-all duration-300;
}
</style>
