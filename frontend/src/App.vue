<template>
  <div id="app">
    <div id="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/article">Article</router-link>
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

  #nav-links {
    float: left;
    display: inline-block;
  }
</style>
