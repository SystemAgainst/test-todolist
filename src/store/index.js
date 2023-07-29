import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("my-tasks")) ?? [],
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.status === "active").length;
    },
  },
  mutations: {
    SET_TASK(state, task) {
      state.tasks = task;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
    CHANGE_TASK(state, [id, status]) {
      const taskIndex = state.tasks.findIndex((t) => t.id === id);
      state.tasks[taskIndex].status = status;
      localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask: async ({ commit }, task) => {
      const newDate = new Date();
      if (task.date < newDate) {
        task.status = "cancelled";
      }
      commit("SET_TASK", task);
    },
    changeTask: ({ commit }, [id, status]) => {
      commit("CHANGE_TASK", [id, status]);
    },
  },
  modules: {},
});
