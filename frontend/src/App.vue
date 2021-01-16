<template>
  <v-app>
    <v-navigation-drawer app
    class="align-center">
      <v-row>
        <router-link class="nav-links" to="/">
          <v-icon
              color="black">
            Home
          </v-icon>
        </router-link>
      </v-row>
      <v-row>
        <router-link class="nav-links" to="/article">
          <a style="color: black;">
            Article
          </a>
        </router-link>
      </v-row>
      <v-row>
        <router-link class="nav-links" to="/about">
          <a style="color: black">
            About
          </a>
        </router-link>
      </v-row>
    </v-navigation-drawer>
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
        color="black"
        padless
        app>
      <v-row
          justify="center"
          no-gutters
      >
        <div
            color="white">
          test
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  .nav-links {
    margin: 30px;
    color: black;
    font-family: "Droid Serif";
  }
</style>
