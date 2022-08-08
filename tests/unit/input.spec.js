import { mount } from "@vue/test-utils";
import FieldInput from "@/components/FormInputs/FieldInput";

describe("FieldInput.vue", () => {
  it("emits input", async () => {
    const props = {
      id: "field-test",
      name: "field-test",
      placeholder: "test",
      ariaLabel: "test",
      type: "search",
      value: "test123",
    };

    const wrapper = mount(FieldInput, {
      propsData: props,
    });

    wrapper.vm.$emit("input");
    wrapper.vm.$emit("input", "QAgency");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input).toBeTruthy();

    expect(wrapper.emitted().input.length).toBe(2);

    expect(wrapper.emitted().input[1]).toEqual(["QAgency"]);
  });
});
