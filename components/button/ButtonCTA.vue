<template>
  <div class="flex">
    <nuxt-link v-if="type === 'internal'" :to="link" :class="dynamicClass">
      {{ label }}
    </nuxt-link>
    <a v-else-if="type === 'external'" :href="link" :class="dynamicClass">
      {{ label }}
    </a>
    <!--
    TODO:
    Add button @click listener from the parent components
    -->
    <button v-else :class="dynamicClass">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['internal', 'external', 'interactive'].includes(value)
      },
    },
    label: {
      type: String,
      required: true,
      default: 'Button',
    },
    link: {
      type: String,
      default: '/',
    },
    fill: {
      type: Boolean,
      default: true,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'big',
    },
  },
  computed: {
    dynamicClass() {
      return {
        'rounded-sm border border-primary capitalize': true,
        'py-2 px-4 font-semibold': this.size === 'big',
        'py-1 px-4 text-sm': this.size === 'small',
        'w-full': this.block,
        'text-white bg-primary hover:bg-primary-dark': this.fill,
        'text-primary hover:text-white hover:bg-primary': !this.fill,
      }
    },
  },
}
</script>

<style></style>
