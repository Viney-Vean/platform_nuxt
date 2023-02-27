<template>
  <v-container
      class="fill-height"
      fluid
      style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="3"
               v-for="n in 27"
               :key="n">
          <v-card
              class="mx-auto"
              max-width="400"
          >
            <v-img
                class="bg-grey-lighten-2 align-end text-white "
                height="150"
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                cover>
              <v-card-text class="">
                <span class="bg-white pa-1 rounded bg-opacity-2">
                  <v-icon icon="mdi-map-marker" class="text-green"></v-icon>
                <span>Top 10 Australian beaches</span>
                </span>
              </v-card-text>
            </v-img>
            <v-card-subtitle class="pt-1">Sale</v-card-subtitle>
            <v-card-text class="pt-1 pb-1">
              <div class="font-weight-bold text-orange">$400,000</div>
              <div class="font-weight-bold pt-1">Whitehaven Beach</div>
            </v-card-text>
            <v-card-subtitle class="pt-1 pb-1 text-black">
              600.00 m<sup>2</sup>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
export default {
  name: "[module]-images",
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>

</style>