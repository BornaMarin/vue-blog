<template>
  <div class="posts-header">
    <div
      v-if="$route.path !== '/posts'"
      class="back-button"
      @click="$router.back()"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-left" size="2x" />
    </div>
    <template v-else>
      <h2>{{ capitalize($route.name) }}</h2>
    </template>
    <slot />
  </div>
</template>

<script>
import { capitalize } from "@/helpers/HelperFunctions";
export default {
  methods: {
    capitalize,
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";

.posts-header {
  border-bottom: $border-dark;
  background-color: $color-bg;
  padding: 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  min-height: 80px;
  z-index: 2;
  h2 {
    margin: 1rem 0;
  }
}
</style>
