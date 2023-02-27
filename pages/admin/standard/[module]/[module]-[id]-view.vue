<template>
  <v-timeline direction="horizontal" line-inset="12">
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <template v-slot:opposite>
        Opposite
      </template>
      Content
    </v-timeline-item>
  </v-timeline>
  <br>
  <v-divider></v-divider>
  <br>
  <v-timeline direction="horizontal" line-inset="12" truncate-line="both">
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <template v-slot:opposite>
        Opposite
      </template>
      Content
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "[module]-[id]-view",
  data: () => ({
    items: [
      {
        color: 'red-lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple-lighten-2',
        icon: ' mdi-arrow-right-drop-circle-outline',
      },
      {
        color: 'green-lighten-1',
        icon: 'mdi-arrow-right-circle-outline',
      },
      {
        color: 'indigo-lighten-2',
        icon: 'mdi-buffer',
      },
    ],
  }),
}
</script>

<style scoped>

</style>