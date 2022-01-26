<template>
  <div>
    <the-header />
    <the-catalog />
    <the-footer />
  </div>
</template>

<script>
import theHeader from './components/theHeader.vue'
import theFooter from './components/theFooter.vue'
import theCatalog from './components/theCatalog.vue'

export default {
  name: 'App',
  components: {
    theHeader,
    theFooter,
    theCatalog
  }
}
</script>

<style lang="scss">
</style>
