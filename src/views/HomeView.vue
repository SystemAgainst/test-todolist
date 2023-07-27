<script>
import { useRouter } from "vue-router/composables";

export default {
  name: "TasksListView",
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "One",
          date: "01.05.2020",
          description: "Lorem ipsum dolor sit amet.",
          status: "complete",
        },
        {
          id: 2,
          title: "Two",
          date: "01.05.2020",
          description: "Lorem ipsum dolor sit amet.",
          status: "overdue",
        },
        {
          id: 3,
          title: "Three",
          date: "01.05.2020",
          description: "Lorem ipsum dolor sit amet.",
          status: "ongoing",
        },
      ],
    };
  },
  methods: {
    openTask(id) {
      this.$router.push(`/task/${id}`);
    },
  },
  created() {
    useRouter(this.$router);
  },
};
</script>

<template>
  <div class="home my-container mt-10">
    <!--  here v-if next div for v-else  -->
    <h2 class="text--white justify-center" v-if="tasks.length === 0">
      Задач пока нет
    </h2>
    <template v-else>
      <v-card
        class="mx-auto my-5 pa-5"
        v-for="task in tasks"
        :key="task.id"
        :value="task"
      >
        <v-card-title>
          {{ task.title }}
          <v-spacer />
          <v-badge :content="task.status" inline>
            <v-icon icon="$vuetify" size="x-large"></v-icon>
          </v-badge>
        </v-card-title>

        <v-card-subtitle> {{ task.date }} </v-card-subtitle>

        <v-card-actions @click="openTask(task.id)">
          <v-btn>Посмотреть</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<style scoped lang="css">
.my-container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
