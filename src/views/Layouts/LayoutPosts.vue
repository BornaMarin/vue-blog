<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LayoutPosts",
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";
.layout {
  min-height: 100vh;
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-right: $border-dark;
  border-left: $border-dark;
}
.back-button {
  cursor: pointer;
}
</style>
