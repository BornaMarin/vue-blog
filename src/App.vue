<template>
  <div id="app" style="min-height: 100%">
    <component :is="layout">
      <transition appear name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Blog posts",
    htmlAttrs: {
      lang: "en-US",
    },
    titleTemplate: "%s | Q agency task",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Blog posts task",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/theme/colors.scss";
@import "./assets/transitions/fade.scss";

* {
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: inherit;
  }
}

html,
body,
:root {
  font-size: 14px;
  margin: 0;
}
body {
  background-color: $color-bg;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
