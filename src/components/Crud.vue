<template>
  <v-main>
    <v-container>
      <v-card class="mx-auto border shadow" style="width: max-content; height: max-content">
        <v-container>

          <v-data-table
              calculate-widths
              :headers="template"
              :items="tuples"
          >
          </v-data-table>

        </v-container>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Crud",

  data: () => ({
    template: [],
    tuples: []
  }),

  methods: {
    getTemplate: () => [
      {
        attribute: 'name',
        label: 'Nome'
      },
      {
        attribute: 'url',
        label: 'Url'
      }
    ],
    setData() {
      this.$api.get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
          .then(response => this.tuples = response.data.results)
    }
  },

  beforeMount() {
    this.setData();
    this.template = this.getTemplate().map(
        ({attribute: value, label: text}) => ({
          value,
          text,
          align: 'center'
        })
    );
  }
}
</script>

<style scoped>

</style>