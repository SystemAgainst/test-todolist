<template>
  <div class="status mt-10">
    <span :class="['badge', className]">{{ text ?? "Активен" }}</span>
  </div>
</template>

<script>
import { ref, watch } from "vue";

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

    const className = ref(classesMap[this.type]);
    const text = ref(textMap[this.type]);

    watch(this.$props, (value) => {
      className.value = classesMap[value.type];
      text.value = textMap[value.type];
    });

    return {
      text,
      className,
    };
  },
};
</script>
