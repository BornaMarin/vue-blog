<template>
  <article role="article" class="post" v-if="post && user">
    <owner-acronym-bubble
      class="post-owner"
      :acronym="getAcronymFromFullName(user.name)"
    />
    <div class="post-content">
      <owner-info :owner="user" />
      <div class="post-content-header">
        <p>{{ post.title | capitalize }}</p>
      </div>
      <div class="post-content-main">
        <p>{{ post.body }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import OwnerInfo from "@/components/UI/OwnerInfo";
import OwnerAcronymBubble from "@/components/UI/OwnerAcronymBubble";
import { getAcronymFromFullName } from "@/helpers/HelperFunctions";
export default {
  components: {
    OwnerInfo,
    OwnerAcronymBubble,
  },
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getAcronymFromFullName,
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";

.post {
  padding: 1rem;
  display: flex;
  color: #fff;
  border-bottom: $border-dark;
  &:hover {
    background-color: rgba($color: $color-dark-gray, $alpha: 0.2);
  }
  &-owner {
    min-width: 44px;
    min-height: 44px;
  }
  &-content {
    margin-left: 10px;
    flex-grow: 1;
    &-header {
      p {
        margin: 8px 0;
        font-weight: bold;
      }
    }
  }
}
</style>
