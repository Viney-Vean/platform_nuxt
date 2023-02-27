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
            v-for="item in originFormInfo.tabs"
            :key="item.key"
            :value="'tab-' + item.key">
          {{ item.label }}
        </v-tab>

      </v-tabs>
      <v-window v-model="currentItem">
        <v-window-item
            v-model="prepareFormData"
            class="pt-5"
            transition="false"
            reverse-transition="false"
            v-for="(tabItem, indexItem) in prepareFormData.tabs"
            :key="tabItem.key"
            :value="'tab-' + tabItem.key">

          <v-row
              class="border-b-md "
              v-for="(tabFields, indexTabFields) in prepareFormData[tabItem.key]"
          >
            {{tabFields}}

            <v-col
                cols="12" md="6"
                v-for="(itemField, indexItemField) in tabFields"
                :key="itemField.key"
                :value="itemField.value"
            >

              <v-card-text
                  class="pa-0"
                  v-if="itemField.type === 'text'">
                <v-text-field
                    :label="itemField.label"
                    v-model="itemField.value"
                    v-bind:name="tabItem.key + '-' + indexTabFields +'-' + itemField.key"
                    v-bind:id="'id' + tabItem.key + '-' + indexTabFields +'-' + itemField.key"
                    color="indigo"
                    density="compact"
                    variant="outlined"
                    hide-details
                ></v-text-field>
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
                  hide-details
              ></v-autocomplete>
            </v-col>
            <v-col
                cols="12" md="12"
                class="ma-0 pt-0"
                v-if="tabItem.multi === true"
            >
              <v-btn
                  class="text-capitalize"
                  size="x-small"
                  color="error"
                  prepend-icon="mdi-minus-circle-outline"
                  @click="removeTab(tabItem, indexTabFields)"
              >
                Remove {{ indexTabFields }}
              </v-btn>
              <v-btn
                  class="ml-2 text-capitalize"
                  size="x-small"
                  color="primary"
                  prepend-icon="mdi-plus-circle-outline"
                  @click="addNewFormSet($event,tabItem)"
              >
                Add more
              </v-btn>
            </v-col>
          </v-row>

        </v-window-item>
      </v-window>
    </v-container>
  </v-form>
</template>
<script>
import customerFormFields from './customer_form.json'
import {da} from "vuetify/locale";

export default {
  name: "[module]-create",


  data: () => ({
    currentItem: 'tab-Web',
    prepareFormData: {...customerFormFields},
    originFormInfo: {...customerFormFields},
    multiTab: {},
    items: [
      'Web', 'Shopping', 'Videos', 'Images', 'News', 'Maps', 'Books', 'Flights', 'Apps',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),

  methods: {
    async prepareRenderData() {
      this.prepareFormData = {...customerFormFields}
    },
    async isMulti(data) {
      if (data.multi === true) {
        return 'border-b-md'
      }
      return ''
    },

    addNewFormSet: function (event, tabInfo) {
      event.preventDefault();
      this.prepareFormData[tabInfo.key].push({...this.originFormInfo[tabInfo.key][0]})
    },
    async removeTab(data, index) {
      console.log("index: ", index)
      console.log(this.prepareFormData[data.key][1])
      this.prepareFormData[data.key].splice(index, 1)
    },
    async validate() {
      const {valid} = await this.$refs.form.validate()
      if (valid) alert('Form is valid')
    },
  },

}
</script>

<style scoped>

</style>

