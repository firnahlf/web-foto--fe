<template>
  <main class="container max-w-7xl mx-auto">
    <article class="flex mb-10">
      <ImagesDetails :image="image" />
      <section class="ml-10 w-96">
        <h1 class="font-semibold text-xl text-black-light">
          {{ image.title }}
        </h1>
        <ButtonCTA
          class="my-8"
          type="interactive"
          label="Unduh Foto"
          :fill="true"
          :block="true"
          size="big"
          @click="downloadHandler"
        />
        <table class="image-meta text-sm">
          <tr>
            <th>Fotografer:</th>
            <td>{{ image.photographer }}</td>
          </tr>
          <tr>
            <th>Kanal:</th>
            <td>{{ image.channel }}</td>
          </tr>
          <tr>
            <th>Tanggal:</th>
            <td>{{ image.date }}</td>
          </tr>
          <tr>
            <th>Lokasi:</th>
            <td>{{ image.location }}</td>
          </tr>
        </table>
        <ul class="flex flex-wrap mt-6 -m-2">
          <li v-for="(tag, index) in image.tags" :key="index" class="m-2">
            <ButtonCTA
              type="internal"
              :label="tag.label"
              :fill="false"
              :block="false"
              size="small"
              :link="tag.slug"
            />
          </li>
        </ul>
      </section>
    </article>
    <section>
      <div class="flex justify-between mb-3">
        <h1 class="text-3xl font-semibold">Peristiwa Serupa</h1>
        <nuxt-link to="/" class="hidden md:block text-2xl font-light">
          Lebih Lengkap
          <i class="las la-angle-right text-xl"></i>
        </nuxt-link>
      </div>
      <ImagesLayoutJustified :images="relatedPhoto" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      image: {
        slug: '/',
        img: '/assets/images/popular-3.png',
        title:
          'GBR: Liverpool FC v Real Madrid - UEFA Champions League Quarter Final: Leg Two',
        date: '03/17/2021',
        categories: ['sprint'],
        photographer: 'Ahmad Arifin',
        channel: 'tournament',
        location: 'Manokwari',
        tags: [
          { slug: '/renang', label: 'renang' },
          { slug: '/akuatik', label: 'akuatik' },
          { slug: '/renang', label: 'renang' },
          { slug: '/akuatik', label: 'akuatik' },
        ],
      },
      relatedPhoto: [
        {
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
          slug: '/',
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
}
</script>

<style lang="scss" scoped>
.image-meta {
  & th {
    text-align: left;
    font-weight: normal;
    padding-right: 1rem;
  }
  & td {
    text-transform: capitalize;
  }
}
</style>
