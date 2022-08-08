<template>
  <div class="owner-bubble">
    {{ acronym }}
  </div>
</template>

<script>
export default {
  props: {
    acronym: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";
.owner-bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: $border-dark;
  height: 44px;
  width: 44px;
}
</style>
