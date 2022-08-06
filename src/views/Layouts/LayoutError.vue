<template>
  <div class="error">
    <p>Error ... Page not found</p>
    <router-link to="/">Go home traveler</router-link>
  </div>
</template>

<script>
export default {
  name: "LayoutError",
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";

.error {
  color: $color-extra-light-gray;
  font-size: 32px;
}
</style>
