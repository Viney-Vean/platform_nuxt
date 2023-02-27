<template>
  <v-autocomplete
      v-model="select"
      :items="items"
      item-title="text"
      item-value="id"
      label="Gender"
      density="compact"
      variant="outlined"
  ></v-autocomplete>
  <v-select
      v-model="select"
      :items="items"
      item-title="text"
      item-value="id"
      label="Gender"
      density="compact"
      variant="outlined"
  ></v-select>

  <v-sheet class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
          v-model="firstName"
          :rules="rules"
          label="First name"
          density="compact"
          variant="outlined"
      ></v-text-field>

      <v-file-input
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Avatar"
          density="compact"
          variant="outlined"
          multiple
      ></v-file-input>

      <v-file-input
          v-model="files"
          color="deep-purple-accent-4"
          counter
          label="File input"
          multiple
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          variant="outlined"
          :show-size="1000"
      >
        <template v-slot:selection="{ fileNames }">
          <template v-for="(fileName, index) in fileNames" :key="fileName">
            <v-chip v-if="index < 2" color="deep-purple-accent-4" label size="small" class="me-2">
              {{ fileName }}
            </v-chip>
            <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2">
          +{{ files.length - 2 }} File(s)
        </span>
          </template>
        </template>
      </v-file-input>

      <v-btn type="submit" class="me-4">Submit</v-btn>

    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "base-create",
  data() {
    return {
      select: {id: 1, text: 'Male'},
      items: [
        {id: 1, text: 'Male'},
        {id: 2, text: 'Female'},
        {id: 3, text: 'Female3'},
        {id: 4, text: 'Female4'},
        {id: 5, text: 'Female5'},
        {id: 6, text: 'Female6'},
        {id: 7, text: 'Female7'},
        {id: 8, text: 'Female8'},
      ],
      firstName: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
      imgRules: [
        value => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        },
      ],
      files: [],
    }
  },
}
</script>

<style scoped>

</style>