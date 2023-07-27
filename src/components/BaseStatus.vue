<script>
const classesMap = {
  active: "primary",
  cancelled: "danger",
  done: "primary",
  pending: "warning",
};

const textMap = {
  active: "Активен",
  cancelled: "Отменен",
  done: "Завершен",
  pending: "Выполняется",
};

export default {
  name: "BaseStatus",
  props: {
    type: {
      type: String,
      required: true,
      default: "active",
      validator(value) {
        return ["active", "done", "cancelled", "pending"].includes(value);
      },
    },
  },
  data() {
    return {
      className: classesMap[this.type],
      text: textMap[this.type],
    };
  },
  watch: {
    observeType(newValue) {
      this.className = classesMap[newValue];
      this.text = textMap[newValue];
    },
  },
};
</script>

<template>
  <div class="status mt-10">
    <span :class="['badge', className]">{{ text ?? "Активен" }}</span>
  </div>
</template>

<style scoped></style>
