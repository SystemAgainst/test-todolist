<template>
  <v-app>
    <base-navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import BaseNavbar from "@/components/BaseNavbar.vue";

export default {
  name: "App",
  components: { BaseNavbar },

  data: () => ({
    //
  }),
};
</script>
