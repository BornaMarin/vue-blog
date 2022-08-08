export default {
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    },
    eventToEmit: {
      type: String,
      default: "input",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "button", "hidden", "search"].includes(value);
      },
    },
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      default: "name",
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    ariaLabel: {
      type: String,
      default: "",
    },
  },
  //overriding computed value getter and setter
  //so we can use v-model=computedValue
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit(this.eventToEmit, value);
      },
    },
  },
};
