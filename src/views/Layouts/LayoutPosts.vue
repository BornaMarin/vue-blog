<template>
  <div class="layout">
    <div class="layout-main">
      <slot />
    </div>
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
  min-height: 100%;
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  &-main {
    border-right: $border-dark;
    border-left: $border-dark;
    width: 100%;
    min-height: 100vh;
  }
}
.back-button {
  cursor: pointer;
}
</style>
