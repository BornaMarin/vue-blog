<template>
  <div class="owner" v-if="owner">
    <p>{{ owner.name }}</p>
    <p class="owner-username">{{ formatOwnerUsername(owner.username) }}</p>
  </div>
</template>

<script>
import { formatOwnerUsername } from "@/helpers/HelperFunctions";
export default {
  props: {
    owner: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    formatOwnerUsername,
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";
.owner {
  display: flex;
  &-username {
    margin-left: 2px;
    color: $color-light-gray;
  }
}
</style>
