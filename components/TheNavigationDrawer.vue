<template>
  <!--  rails-->
  <v-navigation-drawer expand-on-hover>
    <v-list density="compact" nav v-if="navMenuItems">
      <template v-for="item in navMenuItems">
        <v-list-group v-if="item.children.length > 0" :key="item.value" :value="item.value" class="">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :key="item.value" :prepend-icon="item.icon">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item v-for="child in item.children" :key="child.value" :value="child.value">

            <NuxtLink :to="child.url" class="text-decoration-none text-black">
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </NuxtLink>

          </v-list-item>
        </v-list-group>
        <v-list-item v-else :value="item.value" :prepend-icon="item.icon" class="text-start">

          <NuxtLink :to="item.url" class="text-decoration-none text-black">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </NuxtLink>

        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "TheNavigationDrawer",
  data() {
    return {
      navMenuItems: [
        {
          text: 'Dashboard',
          value: "dashboard",
          icon: 'mdi-view-dashboard',
          url: "/admin/standard/dashboard/dashboard-list",
          children: []
        },
        {
          text: 'Customer',
          value: "customer",
          icon: 'mdi-account-circle',
          url: "/admin/standard/customer/customer-list",
          children: []
        },
        {
          text: 'CRM', value: "crm", icon: 'mdi-account-circle', url: "",
          children: [
            {
              text: 'Lead',
              value: "lead",
              icon: 'mdi-account-filter',
              url: "/admin/standard/lead/lead-list",
              children: []
            },
            {
              text: 'Deal',
              value: "deal",
              icon: 'mdi-handshake',
              url: "/admin/standard/deal/deal-list",
              children: []
            },
          ]
        },
        {
          text: 'Users', value: "users", icon: 'mdi-account-group', url: "",
          children: [
            {
              text: 'User',
              value: "user",
              icon: 'mdi-account-filter',
              url: "/admin/standard/user/user-list",
              children: []
            },
            {
              text: 'Role',
              value: "role",
              icon: 'mdi-account-tie',
              url: "/admin/standard/role/role-list",
              children: []
            },
            {
              text: 'Reset password',
              value: "reset_password",
              icon: 'mdi-account-key',
              url: "/admin/standard/reset-password/reset-password-list",
              children: []
            },
          ]
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>