<template>
  <div class="field">
    <!--    <label v-if="label" class="field-label" :for="name">{{ label }}</label>-->
    <input
      class="field-input"
      :id="id"
      :type="type"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      autocomplete="off"
      @focus="toggleFocus"
      @blur="toggleFocus"
      v-model="computedValue"
    />
  </div>
</template>

<script>
import BaseInputMixin from "@/mixins/BaseInputMixin";
export default {
  mixins: [BaseInputMixin],
  methods: {
    toggleFocus() {
      this.$emit("focused");
    },
  },
};
</script>

<style lang="scss">
.field {
  display: flex;
  flex-direction: column;
  &-label {
  }
  &-input {
    flex-grow: 1;
    background: transparent;
    border: none;
    width: 100%;
    display: block;
    color: white;
    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>
