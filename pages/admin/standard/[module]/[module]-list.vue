<template>
  <v-card flat>
    <v-container>
      <v-row>
        <v-col cols="d-flex justify-space-around  flex-column flex-md-row fill-height" md="4">
          <v-card-text>
            <v-text-field
                label="Search"
                density="compact"
                variant="outlined"
            ></v-text-field>
          </v-card-text>
        </v-col>
        <v-col cols="d-flex justify-space-around  flex-column flex-md-row fill-height" md="4">
          <v-card-text class="align-center">
            <v-btn class="text-capitalize" variant="flat" prepend-icon="mdi-filter-check">Filter</v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="d-flex justify-space-around  flex-column flex-md-row fill-height" md="4">
          <v-select
              class="text-capitalize"
              label="Action"
              density="compact"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              singleLine="true"
              variant="plain"
          ></v-select>

        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-table density="compact">
    <thead>
    <tr>
      <th class="text-left table-header" v-for="thItem in tableData.headerData">{{ thItem.text }}</th>
    </tr>
    </thead>
    <tbody>
    <tr class="table-body" v-for="bodyItem in tableData.bodyData">
      <td v-for="(tdItem, i) in tableData.headerData">{{ bodyItem[i] }}</td>
    </tr>
    </tbody>
  </v-table>
  <v-divider></v-divider>


  <v-card flat>
    <v-container>
      <v-row>
        <v-col cols="12 h-25">
          <div class="text-center">
            <v-pagination class="h-25"
                          v-model="page"
                          :length="8"
                          :total-visible="4"
                          rounded="circle"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script>
export default {
  name: "[module]-list",
  data: () => ({
    tableData: {
      headerData: [
        {text: "Fist Name"},
        {text: "Last Name"},
        {text: "Gender"},
        {text: "Date of Birth"},
        {text: "Province"},
        {text: "District"},
        {text: "Commune"},
        {text: "Village"},
      ],
      bodyData: [
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"],
        ["Sok", "Dara", "Male", "2000-01-01", "KPC", "KS", "PTN", "BN"]
      ]
    },
    page: 1,

  }),
  methods: {
    onClick() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
}
</script>

<style scoped>

</style>