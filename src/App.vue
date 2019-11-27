<template>
  <div id="root">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import AppLayout from './views/layouts/dashboard.vue';
import AuthLayout from './views/layouts/auth.vue';

export default {
  components: {
    'app-layout'  : AppLayout,
    'auth-layout' : AuthLayout
  },
  data: () => {
    return {

    };
  },
  computed: {
    layout() {
      return this.$store.getters.layout;
    },
    signedIn() {
      return this.$store.getters.signedIn;
    }
  },
  watch: {

  },
  methods: {
    
  }
};
</script>

<style lang = "scss">

</style>
