<template>
  <v-app>
    <TheHeader/>
    <TheNavigationDrawer/>
    <v-main>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
<!--    <TheFooter/>-->
  </v-app>
</template>

<script>
export default {
  name: "default",

}
</script>

<style scoped>

</style>