<template>
  <div>
    <label :for="name">{{ label }}</label>
    <textarea :id="id" :name="name" v-model="computedValue" />
  </div>
</template>

<script>
import BaseInputMixin from "@/mixins/BaseInputMixin";
export default {
  mixins: [BaseInputMixin],
};
</script>
