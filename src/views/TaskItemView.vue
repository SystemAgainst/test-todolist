<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TaskItemView",
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      tasks: "getTasks",
    }),
    taskById() {
      return this.tasks.find((el) => el.id === this.id);
    },
  },
  methods: {
    ...mapActions({
      changeTask: "changeTask",
    }),
    setStatus(status) {
      this.changeTask([this.id, status]);
    },
  },
};
</script>

<template>
  <div class="task my-container mt-10">
    <v-card class="mx-auto my-5 pa-5">
      <v-card-title> Название: {{ taskById?.title }}</v-card-title>
      <v-divider />

      <v-card-subtitle>
        Статус:
        <v-badge :content="taskById?.status" inline>
          <v-icon icon="$vuetify" size="x-large"></v-icon>
        </v-badge>
      </v-card-subtitle>

      <v-card-subtitle> Дедлайн: {{ taskById?.date }}</v-card-subtitle>

      <v-card-text> Описание: {{ taskById?.description }}.</v-card-text>

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
