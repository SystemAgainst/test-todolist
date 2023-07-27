<script>
import { mapState } from "vuex";

export default {
  name: "TaskItemView",
  props: {
    id: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([""]),
  },
};
</script>

<template>
  <div class="task my-container mt-10">
    <v-card class="mx-auto my-5 pa-5">
      <v-card-title>
        Title
        <v-spacer />
        <v-badge content="Выполняется" inline>
          <v-icon icon="$vuetify" size="x-large"></v-icon>
        </v-badge>
      </v-card-title>

      <v-card-subtitle> 09.10.2022 </v-card-subtitle>

      <v-card-actions>
        <v-btn>Посмотреть</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped lang="css">
.my-container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
