<script>
import { mapState } from "vuex";

export default {
  name: "TaskItemView",
  props: {
    id: String,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
  data() {
    return {};
  },
  methods: {
    getTaskById() {
      return this.tasks.find((task) => task.id === this.id);
    },
    setStatus(status) {
      alert(status);
    },
  },
};
</script>

<template>
  <div class="task my-container mt-10">
    <v-card class="mx-auto my-5 pa-5">
      <v-card-title>
        Название: Title
      </v-card-title>
      <v-divider />

      <v-card-subtitle>
        Статус:
        <v-badge content="Выполняется" inline>
          <v-icon icon="$vuetify" size="x-large"></v-icon>
        </v-badge>
      </v-card-subtitle>

      <v-card-subtitle> Дедлайн: 09.10.2022 </v-card-subtitle>

      <v-card-text>
        Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolore, reprehenderit.
      </v-card-text>

      <div class="d-flex">
        <v-card-actions @click="setStatus('pending')">
          <v-btn>Взять в работу</v-btn>
        </v-card-actions>
        <v-card-actions @click="setStatus('done')">
          <v-btn>Завершить</v-btn>
        </v-card-actions>
        <v-card-actions @click="setStatus('cancelled')">
          <v-btn>Отменить</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="css">
.my-container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
