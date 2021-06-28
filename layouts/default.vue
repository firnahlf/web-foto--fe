<template>
  <div>
    <a href="#main-content" class="skip-link">Skip to Content</a>
    <Navbar />
    <Nuxt id="main-content" class="px-4 md:px-8 xl:px-0 pt-36" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style lang="scss">
.skip-link {
  position: absolute;
  top: -3em;
  display: inline-block;
  padding: 0 1em;
  background-color: var(--primary);
  line-height: 3em;
  color: var(--white);
  z-index: 100;

  &:focus {
    top: 0;
  }
}
</style>
