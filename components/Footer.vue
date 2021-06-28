<template>
  <footer class="bg-primary pt-8 pb-10 mt-16">
    <section
      class="flex flex-wrap justify-between mx-4 md:mx-8 xl:mx-auto max-w-7xl text-white"
    >
      <div
        class="flex flex-col text-sm w-full md:w-4/12 lg:w-auto mb-8 lg:mb-0"
      >
        <nuxt-link to="/" class="p-1">
          <img src="/assets/logo-white.png" alt="PON" class="h-16 mb-5" />
        </nuxt-link>
        <p>
          Jl. Senayan Timur<br />
          Jakarta, Indonesia
        </p>
      </div>
      <div class="w-full md:w-4/12 lg:w-auto mb-8 lg:mb-0">
        <h3 class="text-2xl font-semibold mb-4">Kanal</h3>
        <ul>
          <li
            v-for="(menu, index) in firstSection"
            :key="index"
            class="mb-2 last:mb-0 text-sm"
          >
            <nuxt-link
              :to="menu.link"
              class="hover:underline focus:underline focus:ring-0 focus:outline-none"
            >
              {{ menu.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-4/12 lg:w-auto mb-8 lg:mb-0">
        <h3 class="text-2xl font-semibold mb-4">Lebih Dekat</h3>
        <ul>
          <li
            v-for="(menu, index) in secondSection"
            :key="index"
            class="mb-2 last:mb-0 text-sm"
          >
            <nuxt-link
              :to="menu.link"
              class="hover:underline focus:underline focus:ring-0 focus:outline-none"
            >
              {{ menu.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-auto md:mx-auto lg:mx-0">
        <h3 class="text-2xl font-semibold mb-4">Partner</h3>
        <ul class="grid grid-cols-2 gap-2">
          <li
            v-for="(partner, index) in thirdSection"
            :key="index"
            class="flex items-center"
          >
            <nuxt-link
              :to="partner.link"
              class="hover:underline focus:underline focus:ring-0 focus:outline-none"
            >
              <img :src="partner.img" :alt="partner.title" />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <hr class="border-white mt-8 mb-4 w-full" />
      <div class="w-full md:text-center text-sm">© 2021 PON</div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      firstSection: [
        {
          label: 'Foto',
          link: '/',
        },
        {
          label: 'Atlet',
          link: '/',
        },
        {
          label: 'Cabang Olahraga',
          link: '/',
        },
        {
          label: 'Turnamen',
          link: '/',
        },
        {
          label: 'Fotografer',
          link: '/',
        },
        {
          label: 'Media Partner',
          link: '/',
        },
      ],
      secondSection: [
        {
          label: 'Tentang Kami',
          link: '/',
        },
        {
          label: 'Kontak Kami',
          link: '/',
        },
        {
          label: 'Syarat & Ketentuan',
          link: '/',
        },
        {
          label: 'Kebijakan Privasi',
          link: '/',
        },
      ],
      thirdSection: [
        {
          title: 'PBSI',
          img: '/assets/brands/pbsi.png',
          link: '/',
        },
        {
          title: 'Komite Olimpiade Indonesia',
          img: '/assets/brands/koi.png',
          link: '/',
        },
        {
          title: 'Kementerian Pemuda dan Olahraga Republik Indonesia',
          img: '/assets/brands/kemenpora.png',
          link: '/',
        },
        {
          title: 'Komite Olah Raga Nasional Indonesia',
          img: '/assets/brands/korni.png',
          link: '/',
        },
      ],
    }
  },
}
</script>

<style></style>
