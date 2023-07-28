<script>
export default {
  name: "BaseNavbar",
};
</script>

<template>
  <v-app-bar app color="primary" dark height="100">
    <v-toolbar-title class="headline text-uppercase">
      <span class="title">TodoList</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" text>
      <span class="mr-2">Все задачи</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn to="/new" text>
      <span class="mr-2">Создать</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped></style>
