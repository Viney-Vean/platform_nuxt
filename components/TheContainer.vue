<template>
  <v-row dense>
    <v-col
        v-for="n in 8"
        :key="n"
        cols="3"
    >
      <v-sheet
          color="grey-lighten-2"
          height="96"
      ></v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheContainer"
}
</script>

<style scoped>

</style>