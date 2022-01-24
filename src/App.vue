<template>
  <div>
    <the-header />
    <the-footer />>
  </div>
</template>

<script>
import theHeader from './components/theHeader.vue'
import theFooter from './components/theFooter.vue'

export default {
  name: 'App',
  components: {
    theHeader,
    theFooter
  }
}
</script>

<style>
</style>
