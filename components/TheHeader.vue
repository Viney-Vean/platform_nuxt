<template>
  <v-app-bar density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>


    <template v-slot:append>
      <v-btn icon>
        <v-avatar>
          <v-img
              src="https://avatars.githubusercontent.com/u/25890140?v=4"
              alt="John"
          ></v-img>
        </v-avatar>
      </v-btn>
    </template>
  </v-app-bar>
</template>