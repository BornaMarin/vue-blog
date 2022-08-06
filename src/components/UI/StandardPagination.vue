<template>
  <div class="pagination">
    <button
      class="pagination-item"
      :hidden="isLeftButtonHidden"
      @click="handlePageChange(page - 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angle-left" size="lg" />
    </button>
    <button
      v-for="item in range(paginationCentarPage - 2, paginationCentarPage + 2)"
      :key="item"
      class="pagination-item"
      :class="{ active: isActive(item) }"
      @click="handlePageChange(item)"
    >
      {{ item }}
    </button>
    <button
      class="pagination-item"
      :hidden="isRightButtonHidden"
      @click="handlePageChange(page + 1)"
    >
      <font-awesome-icon icon="fa-solid fa-angle-right" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    paginationCentarPage() {
      if (this.page === 1 || this.page === 2) {
        return 3;
      } else if (
        this.page === this.lastPage ||
        this.page === this.lastPage - 1
      ) {
        return this.lastPage - 2;
      } else {
        return this.page;
      }
    },
    isLeftButtonHidden() {
      return this.page === 1;
    },
    isRightButtonHidden() {
      return this.page === this.lastPage;
    },
  },
  methods: {
    isActive(item) {
      return this.page === item;
    },
    handlePageChange(value) {
      if (value !== this.page) {
        this.$emit("pageChange", value);
      }
    },
    range(min, max) {
      let array = [],
        j = 0;
      for (let i = min; i <= max; i++) {
        array[j] = i;
        j++;
      }
      return array;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/theme/colors.scss";

.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  border-top: $border-dark;
  &-item {
    cursor: pointer;
    margin-right: 2px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: $border-dark;
    background-color: inherit;
    color: white;
    &:hover {
      background-color: rgba($color: $color-dark-gray, $alpha: 0.2);
    }
  }
}
.active {
  background-color: rgba($color: $color-dark-gray, $alpha: 0.2);
}
</style>
