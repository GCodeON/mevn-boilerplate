<template>
  <div id="dashboard">
    <h2>Dashboard Layout</h2>
    <div v-for="(item, index) in nav" v-bind:key="index">
       <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      nav: [
        {
          path : "/policies",
          name : "policies",
          icon : ""
        },
        {
          path : "/template",
          name : "template",
          icon : ""
        }
      ]
    };
  },
  watch: {

  },
  methods: {
    
  }
};
</script>

<style lang="scss">

</style>