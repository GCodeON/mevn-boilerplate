<template>
  <div id="login">
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <label class="label">
        Email
        <input name="email" v-model="user.email" type="email" required>
      </label>
      <label class="label">
        Password
        <input name="password" v-model="user.password" type="password" required>
      </label >
      <button class="button">Login</button>
      <span>Forgot Password? 
        <router-link to="/register">Click Here</router-link>
      </span>
    </form>
  </div>
</template>

<script>

export default {
  data: () => ({
    user: {}
  }),
  components: {

  },
  mounted() {

  },
  methods: {
    login() {
      this.$router.push('/template');
      this.$store.commit('SIGN_IN');
      this.$store.commit('SET_LAYOUT', 'app-layout');
    }
  }
};
</script>

<style lang="scss">

  .button {
    background-color : #29CBA7;
  }

  .label {
    color         : #363636;
    display       : block;
    font-size     : 1rem;
    font-weight   : 700;
    margin-bottom : .5em;
  }
</style>