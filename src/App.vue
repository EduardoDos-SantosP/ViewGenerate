<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Crud></Crud>
    </v-main>

    <v-footer outlined class="mt-16" elevation="5">
      <v-col class="text-center">
        {{ new Date().getFullYear() }} - Eduardo dos Santos Pires
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

import Crud from "./components/Crud";

export default {
  name: 'App',

  components: {
    Crud
  },

  data: () => ({
    //
  }),

  mounted() {
    this.$api.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0').then(console.log)
  }
};
</script>
