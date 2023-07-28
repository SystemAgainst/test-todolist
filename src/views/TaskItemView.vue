<script>
export default {
  name: "TaskItemView",
  props: {
    id: String,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    taskById() {
      return this.tasks.find((task) => task.id === this.id);
    },
  },
  data() {
    return {};
  },
  methods: {
    setStatus(status) {
      const updated = { ...this.taskById, status };
      this.$store.dispatch("changeTask", updated);
    },
  },
};
</script>

<template>
  <div class="task my-container mt-10">
    <v-card class="mx-auto my-5 pa-5">
      <v-card-title> Название: {{ taskById?.title }} </v-card-title>
      <v-divider />

      <v-card-subtitle>
        Статус:
        <v-badge :content="taskById?.status" inline>
          <v-icon icon="$vuetify" size="x-large"></v-icon>
        </v-badge>
      </v-card-subtitle>

      <v-card-subtitle> Дедлайн: {{ taskById?.date }} </v-card-subtitle>

      <v-card-text> Описание: {{ taskById?.description }}. </v-card-text>

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
