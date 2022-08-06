<template>
  <div class="loader">
    <font-awesome-icon
      class="loader-icon"
      icon="fa-solid fa-spinner"
      size="3x"
      spin
    />
  </div>
</template>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  height: 140px;
  align-items: center;
  &-icon {
    color: white;
  }
}
</style>
