/* eslint-disable vue/no-v-html */
<template>
  <header class="header fixed w-full top-0 bg-white-solid z-20">
    <!-- Mobile -->
    <div class="flex relative md:hidden mx-4 items-center py-2">
      <div class="flex flex-1">
        <nuxt-link to="/" class="home p-1">
          <img src="/assets/logo.png" alt="PON" class="h-10" />
        </nuxt-link>
      </div>
      <button
        type="submit"
        class="rounded-sm py-2 px-3"
        @click="searchOnMobileActive = !searchOnMobileActive"
      >
        <i
          v-show="!searchOnMobileActive"
          class="las la-search text-2xl transform rotate-270"
        ></i>
        <i v-show="searchOnMobileActive" class="las la-times text-2xl"></i>
      </button>
      <!-- Mobile Search Drawer -->
      <div
        v-show="searchOnMobileActive"
        class="absolute top-16 h-screen w-screen -mx-4 bg-white-solid"
      >
        <form class="relative w-100" @submit.prevent="handleSearch">
          <VueSimpleSuggest
            ref="suggestComponentMobile"
            v-model="searchKeywords"
            :list="list"
            :filter-by-query="true"
            :styles="searchFormStyleMobile"
            :nullable-select="true"
            placeholder="Cari"
            @select="handleSearch"
          >
            <div slot="suggestion-item" slot-scope="scope">
              <span
                v-html="boldenSuggestion(scope, 'suggestComponentMobile')"
              ></span>
            </div>
          </VueSimpleSuggest>
          <button
            type="submit"
            class="absolute inset-y-0 left-4 px-3 rounded-sm no-focus"
            tabindex="-1"
          >
            <i class="las la-search text-xl transform rotate-270"></i>
          </button>
        </form>
      </div>
    </div>

    <!-- Desktop -->
    <div
      class="hidden md:flex mx-4 md:mx-8 xl:mx-auto h-16 items-center max-w-7xl"
    >
      <div class="flex flex-1">
        <nuxt-link to="/" class="home p-1">
          <img src="/assets/logo.png" alt="PON" class="h-10" />
        </nuxt-link>
      </div>
      <div class="flex-1 w-80 h-10 mx-auto">
        <form class="relative w-100" @submit.prevent="handleSearch">
          <VueSimpleSuggest
            ref="suggestComponent"
            v-model="searchKeywords"
            :list="list"
            :filter-by-query="true"
            :styles="searchFormStyle"
            :nullable-select="true"
            placeholder="Cari"
            @select="handleSearch"
          >
            <div slot="suggestion-item" slot-scope="scope">
              <span v-html="boldenSuggestion(scope, 'suggestComponent')"></span>
            </div>
          </VueSimpleSuggest>
          <button
            type="submit"
            class="absolute inset-y-0 left-0 px-3 rounded-sm no-focus"
            tabindex="-1"
          >
            <i class="las la-search text-xl transform rotate-270"></i>
          </button>
        </form>
      </div>
      <div class="flex flex-1">
        <button
          class="ml-auto rounded-sm border border-primary py-2 px-4 text-primary hover:bg-primary hover:text-white"
        >
          Masuk
        </button>
      </div>
    </div>
    <div class="overflow-auto">
      <nav class="flex md:justify-center">
        <nuxt-link
          v-for="(nav, navIndex) in navs"
          :key="navIndex"
          :to="nav.link"
          class="mx-2 md:mx-0 py-2 px-3 nav-menu min-w-max no-focus"
        >
          {{ nav.label }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      searchOnMobileActive: false,
      navs: [
        {
          label: 'Foto',
          link: '/',
        },
        {
          label: 'Atlet',
          link: '/atlet',
        },
        {
          label: 'Cabang Olahraga',
          link: '/olahraga',
        },
        {
          label: 'Turnamen',
          link: '/turnamen',
        },
        {
          label: 'Fotografer',
          link: '/fotografer',
        },
        {
          label: 'Media Partner',
          link: '/partner',
        },
      ],
      searchKeywords: '',
      list: ['Andi', 'Yuda', 'Budi', 'Rendra'],
      searchFormStyle: {
        vueSimpleSuggest: 'flex items-center relative w-full',
        inputWrapper: 'w-full',
        defaultInput: 'bg-white py-2 pl-11 pr-4 rounded-sm w-full',
        suggestions:
          'absolute top-9 bg-white-solid w-full py-2 shadow rounded-sm',
        suggestItem: 'px-4 py-2 ',
      },
      searchFormStyleMobile: {
        vueSimpleSuggest: 'flex items-center relative w-full',
        inputWrapper: 'w-full',
        defaultInput:
          'bg-white py-2 pl-11 pr-4 rounded-sm mx-4 search-input--mobile',
        suggestions:
          'absolute top-10 bg-white-solid w-full h-full py-2 rounded-sm',
        suggestItem: 'px-4 py-2 ',
      },
    }
  },
  methods: {
    boldenSuggestion(scope, refName) {
      if (!scope) return scope

      const { suggestion, query } = scope

      const result = this.$refs[refName].displayProperty(suggestion)

      if (!query) return result

      // eslint-disable-next-line no-useless-escape
      const texts = query.split(/[\s-_/\\|\.]/gm).filter((t) => !!t) || ['']
      return result.replace(
        new RegExp('(.*?)(' + texts.join('|') + ')(.*?)', 'gi'),
        '$1<b>$2</b>$3'
      )
    },
    handleSearch(e) {
      console.log('submit', e || this.searchKeywords)
    },
  },
}
</script>

<style lang="scss">
.suggest-item.hover {
  @apply bg-white cursor-pointer;
}
.search-input--mobile {
  width: calc(100% - 2rem);
}
</style>
<style lang="scss" scoped>
.nav-menu {
  @apply border-transparent border-b-2 hover:text-primary focus:text-primary;

  &.nuxt-link-exact-active {
    @apply text-primary border-b-2 border-primary;
  }
}
</style>
