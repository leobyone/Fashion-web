<template>
  <div id="app">
    <v-header />
    <nuxt />
    <v-footer />
  </div>
</template>
<script>
import axios from 'axios';
import vHeader from '@/components/Header.vue';
import vFooter from '@/components/Footer.vue';
export default {
  name: 'app',
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
  }
}
</script>
