<template>
  <v-col
      cols="12" md="6"
  >
    <v-autocomplete
        :label="'Province'"
        v-model="province_id"
        :items="provinces.map(item => ({id: item.id, text: item.label}))"
        item-title="text"
        item-value="id"
        color="indigo"
        density="compact"
        variant="outlined"
        hide-details
    ></v-autocomplete>
  </v-col>
  <v-col
      cols="12" md="6"
  >
    <v-autocomplete
      :label="'District'"
      v-model="district_id"
      :items="districts.filter(item => item.parent_id === province_id).map(item => ({id: item.id, text: item.label}))"
      item-title="text"
      item-value="id"
      color="indigo"
      density="compact"
      variant="outlined"
      hide-details
    ></v-autocomplete>
  </v-col>
  <v-col
      cols="12" md="6"
  >
    <v-autocomplete
        :label="'Commune'"
        :items="[]"
        item-title="text"
        item-value="id"
        color="indigo"
        density="compact"
        variant="outlined"
        hide-details
    ></v-autocomplete>
  </v-col>
  <v-col
      cols="12" md="6"
  >
    <v-autocomplete
        :label="'village'"
        :items="[]"
        item-title="text"
        item-value="id"
        color="indigo"
        density="compact"
        variant="outlined"
        hide-details
    ></v-autocomplete>
  </v-col>
</template>

<script>
import provinces from '@/pages/admin/standard/[module]/province.json'
import districts from '@/pages/admin/standard/[module]/district.json'

export default {
  name: 'PermanentAddress',
  watch: {
    province_id: function (val) {
      this.district_id = null
    },
  },
  data: () => ({
    provinces,
    districts,
    province_id: null,
    district_id: null,
  }),
}
</script>
