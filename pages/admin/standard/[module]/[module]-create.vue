<template>
  <v-form ref="form">
    <v-container class="pa-0">
      <v-tabs
          v-model="currentItem"
          density="compact"
          bg-color="indigo"
          show-arrows
      >
        <v-tab
            class="text-capitalize"
            v-for="tabItem in formInfo.tabs"
            :key="tabItem.key"
            :value="'tab-' + tabItem.key">
          {{ tabItem.label }}
        </v-tab>
      </v-tabs>
      <v-window v-model="currentItem">
        <v-window-item
            class="pt-5"
            transition="false"
            reverse-transition="false"
            v-for="(tabItem, indexItem) in formInfo.tabs"
            :key="tabItem.key"
            :value="'tab-' + tabItem.key">
          <v-row
              class="border-b-md "
              v-for="(tabItemRow, indexTabItemRow) in formInfo[tabItem.key]">
            <v-col
                cols="12" md="6"
                v-for="(itemField, indexItemField) in tabItemRow"
                :key="itemField.key"
                :value="itemField.value">

              <v-card-text
                  class="pa-0"
                  v-if="itemField.type === 'text'">
                <v-text-field
                    :label="itemField.label"
                    v-model="itemField.value"
                    color="indigo"
                    density="compact"
                    variant="outlined"
                    hide-details></v-text-field>
              </v-card-text>
              <v-autocomplete
                  v-else-if="itemField.type === 'select'"
                  :label="itemField.label"
                  :items="[]"
                  item-title="text"
                  item-value="id"
                  color="indigo"
                  density="compact"
                  variant="outlined"
                  hide-details></v-autocomplete>
              <v-file-input
                  v-else-if="itemField.type === 'image'"
                  :label="itemField.label"
                  v-model="itemField.value"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                  density="compact"
                  variant="outlined"
              ></v-file-input>
            </v-col>
            <v-col
                cols="12" md="12"
                class="ma-0 pt-0"
                v-if="tabItem.multi === true">
              <v-btn
                  v-if="isShowBtnRemoveTabRow(tabItem)"
                  class="text-capitalize"
                  size="x-small"
                  color="error"
                  prepend-icon="mdi-minus-circle-outline"
                  @click="removeTabRow(tabItem, indexTabItemRow)">
                Remove {{ indexTabItemRow }}
              </v-btn>
              <v-btn
                  v-if="isShowBtnAddNewTabRow(tabItem, indexTabItemRow)"
                  class="ml-2 text-capitalize"
                  size="x-small"
                  color="primary"
                  prepend-icon="mdi-plus-circle-outline"
                  @click="addNewTabRow(tabItem)">
                Add more
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>

      <v-row justify="center">
        <v-col
            class="text-center pt-10 pb-10"
            cols="12"
            md="12"
        >
          <v-btn
              class="ml-2 text-capitalize"
              color="primary"
              prepend-icon="mdi-content-save-outline"
              @click="saveData">
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import customerFormFields from './customer_form.json'

export default {
  name: "[module]-create",
  data() {
    return {
      currentItem: 'tab-Web',
      originFormInfo: JSON.parse(JSON.stringify({...customerFormFields})),
      formInfo: JSON.parse(JSON.stringify({...customerFormFields})),
    }
  },
  methods: {
    addNewTabRow(tabItem) {
      const tabItemRow = JSON.parse(JSON.stringify(this.originFormInfo[tabItem.key][0]));
      this.formInfo[tabItem.key].push(tabItemRow);
    },
    removeTabRow(tabItem, index) {
      if (this.formInfo[tabItem.key].length > 1) {
        this.formInfo[tabItem.key].splice(index, 1);
      }
    },
    getTabRowLength(tabItem) {
      return this.formInfo[tabItem.key].length
    },
    isShowBtnRemoveTabRow(tabItem) {
      return this.getTabRowLength(tabItem) > 1
    },
    isShowBtnAddNewTabRow(tabItem, indexTabItemRow) {
      return this.getTabRowLength(tabItem) === (indexTabItemRow + 1)
    },
    saveData() {
      for (const item in this.formInfo) {
        console.log(this.formInfo[item])
      }
    }
  }
}
</script>

<style scoped>

</style>

