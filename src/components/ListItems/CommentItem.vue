<template>
  <div class="comment">
    <div class="comment-connector">
      <div class="comment-connector-line" />
      <div class="comment-connector-curved-line" />
    </div>
    <div class="comment-main">
      <p class="comment-main-email">{{ comment.email }}</p>
      <p class="comment-main-content">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";
.comment {
  display: flex;
  color: #fff;
  border-bottom: $border-dark;
  &-connector {
    min-width: 44px;
    position: relative;
    &-line {
      position: absolute;
      border-left: $border-dark;
      width: 1px;
      height: 100%;
      margin: 0 auto;
      left: 22px;
    }
    &-curved-line {
      position: absolute;
      height: 38px;
      width: 22px;
      left: 22px;
      margin-left: auto;
      border-left: $border-dark;
      border-bottom: $border-dark;
      border-radius: 0 0 0 10px;
    }
  }
  &-main {
    padding: 1rem;
    &-email {
      color: $color-light-gray;
    }
    &-content {
      padding: 1rem;
      border-radius: 20px;
      background-color: $hr-color;
    }
  }
}
</style>
