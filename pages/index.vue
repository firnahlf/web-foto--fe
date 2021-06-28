<template>
  <main class="container max-w-7xl mx-auto">
    <section class="flex flex-col mb-20">
      <div class="flex justify-between mb-3">
        <h1 class="text-3xl font-semibold">Peristiwa Terbaik</h1>
        <nuxt-link to="/" class="hidden md:block text-2xl font-light">
          Lebih Lengkap
          <i class="las la-angle-right text-xl"></i>
        </nuxt-link>
      </div>
      <div class="grid-popular grid grid-cols-1 md:grid-cols-3 gap-5">
        <nuxt-link
          v-for="(item, index) in best"
          :key="index"
          :to="item.slug"
          class="group"
        >
          <ImagesThumb :image="item" />
        </nuxt-link>
      </div>
      <nuxt-link to="/" class="md:hidden mt-3 ml-auto text-2xl font-light">
        Lebih Lengkap
        <i class="las la-angle-right text-xl"></i>
      </nuxt-link>
    </section>
    <section>
      <div class="flex justify-between mb-3">
        <h1 class="text-3xl font-semibold">Peristiwa Terbaru</h1>
      </div>
      <ImagesLayoutJustified :images="latest" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      best: [
        {
          slug: '/photo/a',
          img: '/assets/images/popular-1.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
        },
        {
          slug: '/photo/a',
          img: '/assets/images/popular-2.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
        },
        {
          slug: '/photo/a',
          img: '/assets/images/popular-3.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
        },
      ],
      latest: [
        {
          slug: '/photo/a',
          img: '/assets/images/latest-1.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 504,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-2.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 504,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-3.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'portrait',
          width: 240,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-4.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-5.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-6.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-5.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-6.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-4.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
        {
          slug: '/photo/a',
          img: '/assets/images/latest-5.png',
          title:
            'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
          date: '03/17/2021',
          categories: ['sprint'],
          orientation: 'landscape',
          width: 416,
          height: 320,
        },
      ],
    }
  },
  mounted() {
    console.log(this.$device)
  },
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
