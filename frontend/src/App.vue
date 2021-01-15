<template>
  <div id="app">
    <div class="router-links">
      <router-link class="nav-links" to="/">Home</router-link>
      <router-link class="nav-links" to="/article">Article</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .router-link-active {
    color: white;
    background-color: red;
  }

  .router-link-exact-active {
    color: white;
    background-color: blue;
  }

  .router-links {

  }

  .nav-links {
    margin: 10px;
    display: inline-block;
  }
</style>
