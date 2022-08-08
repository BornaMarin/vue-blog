<template>
  <div>
    <slot />
    <infinite-loading @infinite="handleBottom" />
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  components: { InfiniteLoading },
  props: {
    params: {
      type: Object,
      default: () => {},
    },
    apiKey: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleBottom($state) {
      this.$apiService[this.apiKey].fetch(this.params).then(({ data }) => {
        if (data.length) {
          this.$emit("loaded", data);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
</script>
