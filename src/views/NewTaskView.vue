<script>
export default {
  name: "NewTaskView",
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
  data() {
    return {
      id: Date.now().toString(),
      title: "",
      description: "",
      date: null,
    };
  },
  methods: {
    getTaskById(id) {
      return this.tasks.find((task) => task.id === id);
    },
    submit() {
      const newTaskObj = {
        id: Date.now().toString(),
        title: this.title,
        date: new Date(this.date).setHours(23, 59, 59, 999),
        description: this.description,
        status: "active",
      };

      this.$store.commit("ADD_TASK", newTaskObj);
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="new my-container mt-12">
    <form class="card" @submit.prevent="submit" @keydown.enter="submit">
      <h1>Создать новую задачу</h1>
      <div class="form-control">
        <label for="title">Название</label>
        <input type="text" id="title" v-model="title" />
      </div>

      <div class="form-control">
        <label for="date">Дата дэдлайна</label>
        <input type="date" id="date" v-model="date" />
      </div>

      <div class="form-control">
        <label for="description">Описание</label>
        <textarea id="description" v-model="description"></textarea>
      </div>

      <!--   Add :disabled="!isValid" to below string   -->
      <button class="btn primary">Создать</button>
    </form>
  </div>
</template>

<style scoped>
.my-container {
  margin: 0 auto;
  max-width: 1000px;
}

.card {
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
}
.form-control {
  position: relative;
  margin-bottom: 0.5rem;
}

.form-control input,
.form-control select,
.form-control textarea {
  margin: 0;
  outline: none;
  border: 2px solid #ccc;
  display: block;
  width: 100%;
  //color: #2c3e50;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  font-size: 1rem;
  resize: none;
}

.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}

.form-checkbox .checkbox input {
  margin-right: 1rem;
}

.form-control label {
  display: block;
  margin: 0 0 0.3rem 0.3rem;
  font-weight: 500;
}

.form-control input:active,
.form-control input:focus {
  transition: border 0.22s;
  border: 2px solid #42b983;
}
.btn {
  color: #42b983;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 1 !important;
  background: #eee !important;
  border-color: #ddd !important;
  color: #999 !important;
}

.btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btn.primary {
  background: #42b983;
  color: #fff;
}
</style>
